import Didact from './didact';

// function update(r) {
//   Didact.render(r === 1 ? element1 : element2, container);
// }

// /** @jsx Didact.createElement */
// const element1 = (
//   <div id="app">
//     <h1 title="bar">Hello</h1>
//     <div className="article">
//       <h2>title</h2>
//       content
//     </div>
//     <button onClick={_ => update(0)}>update</button>
//   </div>
// );

// /** @jsx Didact.createElement */
// const element2 = (
//   <div id="app">
//     <h1 title="foo">Hello again</h1>
//     <div className="texts">123</div>
//     <button onClick={_ => update(1)}>update</button>
//   </div>
// );

/** @jsx Didact.createElement */
function App(props) {
  return (
    <div id="app">
      <h1 title="foo">Hello {props.name}</h1>
      <div className="texts">123</div>
    </div>
  );
}

Didact.render(<App name="xxx" />, document.getElementById('root'));
