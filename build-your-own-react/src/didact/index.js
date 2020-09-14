const TEXT_ELEMENT = 'TEXT_ELEMENT';

const EFFECT_UPDATE = 0;
const EFFECT_PLACEMENT = 1;
const EFFECT_DELETION = 2;

const isEvent = key => key.startsWith('on');
const isProperty = key => key !== 'children' && !isEvent(key);

/**
 * create a text fiber node
 * @param {string} text node text string
 */
function createTextElement(text) {
  return {
    type: TEXT_ELEMENT,
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

/**
 * create a fiber node
 * @param {string} type fiber node type
 * @param {object} props fiber node props
 * @param  {...any} children child node objects
 */
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child => typeof child === 'object' ? child : createTextElement(child)),
    },
  };
}

/**
 * create dom element from the fiber node
 * @param {Fiber} fiber fiber node
 */
function createDom(fiber) {
  const dom = fiber.type === TEXT_ELEMENT
    ? document.createTextNode('')
    : document.createElement(fiber.type);

  const { props } = fiber;
  for (const [k, v] of Object.entries(props)) {
    if (isProperty(k)) {
      dom[k] = v;
    } else if (isEvent(k)) {
      dom.addEventListener(k.toLowerCase().substring(2), v);
    }
  }

  return dom;
}

/**
 * update dom
 * @param {Element} dom dom node
 * @param {object} prevProps old props
 * @param {object} nextProps new props
 */
function updateDom(dom, prevProps, nextProps) {
  const isGone = key => !(key in nextProps);
  const isNew = key => prevProps[key] !== nextProps[key];

  // remove gone or changed event listeners
  Object.keys(prevProps)
    .filter(isEvent)
    .filter(key => isGone(key) || isNew(key))
    .forEach(eventName => {
      dom.removeEventListener(eventName.toLowerCase().substring(2), prevProps[eventName]);
    });

  // add new event listeners
  Object.keys(nextProps)
    .filter(isEvent)
    .filter(isNew)
    .forEach(eventName => {
      dom.addEventListener(eventName.toLowerCase().substring(2), nextProps[eventName]);
    });

  // remove old properties
  Object.keys(prevProps)
    .filter(isProperty)
    .filter(isGone)
    .forEach(prop => dom[prop] = '');

  // update new properties
  Object.keys(nextProps)
    .filter(isProperty)
    .filter(isNew)
    .forEach(prop => dom[prop] = nextProps[prop]);
}

/**
 * commit the root tree
 */
function commitRoot() {
  deletions.forEach(commitWork);
  commitWork(wipRoot.child);
  // set the wipRoot as currentRoot after it has been committed to the dom
  currentRoot = wipRoot;
  wipRoot = null;
}

/**
 * commit a unit of work
 */
function commitWork(fiber) {
  if (!fiber) {
    return;
  }

  const parentDom = fiber.parent.dom;

  if (
    fiber.effectTag === EFFECT_PLACEMENT &&
    fiber.dom !== null
  ) {
    parentDom.appendChild(fiber.dom);
  } else if (
    fiber.effectTag === EFFECT_UPDATE &&
    fiber.dom !== null
  ) {
    updateDom(fiber.dom, fiber.alternate.props, fiber.props);
  } else if (fiber.effectTag === EFFECT_DELETION) {
    parentDom.removeChild(fiber.dom);
  }

  if (fiber.effectTag !== EFFECT_DELETION) {
    commitWork(fiber.child);
    commitWork(fiber.sibling);
  }
}

/**
 * render the fiber tree to the dom container
 * @param {Fiber} element the fiber tree to be rendered
 * @param {Element} dom dom container
 */
function render(element, dom) {
  wipRoot = {
    // the dom element of the fiber node
    dom,
    // the properties of the fiber node
    props: {
      children: [element],
    },
    // the corresponding current fiber node that has rendered to the dom
    alternate: currentRoot,
  };
  deletions = [];
  // set the fiber tree to nextUnitOfWork to make the work start
  nextUnitOfWork = wipRoot;
}

function workLoop(deadline) {
  let shouldYield = false;
  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    shouldYield = deadline.timeRemaining() < 1;
  }

  // if all work has finished and there still is a progress tree, commit it to the dom
  if (!nextUnitOfWork && wipRoot) {
    commitRoot();
  }

  requestIdleCallback(workLoop);
}

/**
 * 1. create dom node for the fiber unit
 * 2. create new fiber nodes
 * 3. return the next unit of work
 * @param {Fiber} fiber fiber unit
 * @returns {Fiber} the next unit of work
 */
function performUnitOfWork(fiber) {
  // create dom node for the fiber
  if (!fiber.dom) {
    fiber.dom = createDom(fiber);
  }

  // create fiber nodes from the fiber's children
  const elements = fiber.props.children;
  reconcileChildren(fiber, elements);

  // return the next unit of work
  // 1. if the current fiber has children, the next fiber should be its first child
  if (fiber.child) {
    return fiber.child;
  }
  // 2. the current fiber has no children, go to its sibling
  // 3. if the fiber does not have a sibling, return to its parent and find its parent's sibling
  let nextFiber = fiber;
  while (nextFiber) {
    if (nextFiber.sibling) return nextFiber.sibling;
    nextFiber = nextFiber.parent;
  }
  return null;
}

/**
 * create child fiber nodes from children elements
 * @param {Fiber} wipFiber current fiber
 * @param {object} elements children elements
 */
function reconcileChildren(wipFiber, elements) {
  // the index of the element currently being processed
  let index = 0;
  // the last fiber that has been created
  let lastFiber = null;
  let oldFiber = wipFiber.alternate && wipFiber.alternate.child;

  // iterate the children elements and their alternates
  while (index < elements.length || oldFiber) {
    const element = elements[index];
    let newFiber = null;

    const sameType = oldFiber && element && oldFiber.type === element.type;

    if (sameType) {
      // update the fiber
      newFiber = {
        type: element.type,
        props: element.props,
        dom: oldFiber.dom,
        parent: wipFiber,
        alternate: oldFiber,
        effectTag: EFFECT_UPDATE,
      };
    } else {
      if (element) {
        // there is a new node to be placed
        newFiber = {
          type: element.type,
          props: element.props,
          dom: null,
          parent: wipFiber,
          alternate: null,
          effectTag: EFFECT_PLACEMENT,
        }
      }
      if (oldFiber) {
        // there is an old node to be deleted
        oldFiber.effectTag = EFFECT_DELETION;
        deletions.push(oldFiber);
      }
    }

    // append the new fiber to the fiber tree
    if (index === 0) {
      wipFiber.child = newFiber;
    } else if (element) {
      lastFiber.sibling = newFiber;
    }

    oldFiber = oldFiber && oldFiber.sibling;
    lastFiber = newFiber;
    index++;
  }
}

let nextUnitOfWork = null;
// last fiber tree that has been committed to the dom
let currentRoot = null;
// the fiber tree 
let wipRoot = null;
// the fiber nodes to be deleted from the dom
let deletions = [];
requestIdleCallback(workLoop);

const Didact ={
  createElement,
  render,
};

export default Didact;
