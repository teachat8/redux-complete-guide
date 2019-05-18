import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';


ReactDOM.render(<App />, document.getElementById('root'));

// reducer
const weight = (state = 160, action) => {
  switch (action.type) {
    case 'eat':
      return state + 10;
    case 'hungry':
      return state - 10;
    default: 
      return state;
  }
}

const store = createStore(weight);

const watch = () => {
  const current = store.getState();
  console.log(`三木森 现在体重为${current}`)
};

// 通过 subscribe 订阅一个函数实现 redux 数据响应
store.subscribe(watch);
store.dispatch({type: 'eat'});

store.dispatch({type: 'eat'});

store.dispatch({type: 'eat'});

store.dispatch({type: 'hungry'});


// console.log(store.getState());

// store.dispatch({type: 'eat'});
// console.log('我吃了一些食物');
// console.log(store.getState());

// console.log('我饿了好几天');
// store.dispatch({type: 'hungry'});
// console.log(store.getState());

// console.log('我又饿了好几天');
// store.dispatch({type: 'hungry'});
// console.log(store.getState());

/*
reducer 里面使用switch语句根据传入的类型，输出新的状态

把reducer 传入 createStore(weight)

store.dispatch({ type: 'hungry'})

通过 store.getState() 获取当前的状态

*/




