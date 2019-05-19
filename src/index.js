import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { weight } from './teachat.redux';
import { Provider } from 'react-redux';


const store = createStore(weight);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


// const render = () => {
//   ReactDOM.render(<App store={store} />, document.getElementById('root'));
// };

// render()

// store.subscribe(render)






