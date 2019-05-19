import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { weight } from './teachat.redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


const store = createStore(weight, applyMiddleware(thunk));
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






