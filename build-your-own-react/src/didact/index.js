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

function render(element, dom) {
  nextUnitOfWork = {
    dom,
    props: {
      children: [element],
    },
  };
}

function workLoop(deadline) {
  let shouldYield = false;
  while (nextUnitOfWork && !shouldYield) {
    console.log('nextUnitOfWork', nextUnitOfWork);
    console.log(deadline.timeRemaining());
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    shouldYield = deadline.timeRemaining() < 1;
  }
  requestIdleCallback(workLoop);
}

function performUnitOfWork(fiber) {
  // create dom node for the fiber
  if (!fiber.dom) {
    fiber.dom = createDom(fiber);
  }

  // append the dom node of the fiber on the parent dom node
  if (fiber.parent) {
    fiber.parent.dom.appendChild(fiber.dom);
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
requestIdleCallback(workLoop);

const Didact ={
  createElement,
  render,
};

export default Didact;
