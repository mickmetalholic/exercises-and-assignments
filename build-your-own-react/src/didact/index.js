const TEXT_ELEMENT = 'TEXT_ELEMENT';

function createTextElement(text) {
  return {
    type: TEXT_ELEMENT,
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child => typeof child === 'object' ? child : createTextElement(child)),
    },
  };
}

function createDom(fiber) {
  const dom = fiber.type === TEXT_ELEMENT
    ? document.createTextNode('')
    : document.createElement(fiber.type);

  const { props } = fiber;
  for (const [k, v] of Object.entries(props)) {
    if (k !== 'children') {
      dom[k] = v;
    }
  }

  return dom;
}

/**
 * commit the root tree
 */
function commitRoot() {
  commitWork(wipRoot.child);
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
  parentDom.appendChild(fiber.dom);
  commitWork(fiber.child);
  commitWork(fiber.sibling);
}

function render(element, dom) {
  wipRoot = {
    dom,
    props: {
      children: [element],
    },
  };
  nextUnitOfWork = wipRoot;
}

function workLoop(deadline) {
  let shouldYield = false;
  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    shouldYield = deadline.timeRemaining() < 1;
  }

  // if all work finished and there is a work in progress tree, commit it to the dom
  if (!nextUnitOfWork && wipRoot) {
    commitRoot();
  }

  requestIdleCallback(workLoop);
}

function performUnitOfWork(fiber) {
  // create dom node for the fiber
  if (!fiber.dom) {
    fiber.dom = createDom(fiber);
  }

  // create child fiber nodes
  let index = 0, prevSibling = null;
  while (index < fiber.props.children.length) {
    const element = fiber.props.children[index];

    const nextFiber = {
      type: element.type,
      props: element.props,
      parent: fiber,
      dom: null,
    };

    if (index === 0) {
      fiber.child = nextFiber;
    } else {
      prevSibling.sibling = nextFiber;
    }

    prevSibling = nextFiber;
    index++;
  }

  // return next fiber
  if (fiber.child) {
    return fiber.child;
  }
  let nextFiber = fiber;
  while (nextFiber) {
    if (nextFiber.sibling) return nextFiber.sibling;
    nextFiber = nextFiber.parent;
  }
  return null;
}

let nextUnitOfWork = null;
let wipRoot = null;
requestIdleCallback(workLoop);

const Didact ={
  createElement,
  render,
};

export default Didact;
