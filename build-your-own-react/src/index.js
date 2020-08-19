import Didact from './didact';

/** @jsx Didact.createElement */
const element = (
  <div id="app">
    <h1 title="foo">
      Hello
    </h1>
    <div className="article">
      <h2>title</h2>
      content
    </div>
  </div>
);


const container = document.getElementById('root');
Didact.render(element, container);
