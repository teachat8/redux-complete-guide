import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { weight } from './teachat.redux';

const store = createStore(weight);

const render = () => {
  ReactDOM.render(<App store={store} />, document.getElementById('root'));
};

render()

store.subscribe(render)






