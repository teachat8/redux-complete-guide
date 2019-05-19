import { createStore } from 'redux';

const EAT = 'eat';
const HUNGRY = 'hungry';

// reducer
export const weight = (state = 160, action) => {
  switch (action.type) {
    case EAT:
      return state + 10;
    case HUNGRY:
      return state - 10;
    default: 
      return state;
  }
}

const store = createStore(weight);

// action
export const eat = () => {
  console.log('teachat 正在吃山珍海味');
  return {type: EAT}
}

export const eatAsync = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(eat());
    }, 2000)
  }
  
}

export const hungry = () => {
  console.log('饿了一天');
  return {type: HUNGRY}
}

// const watch = () => {
//   const current = store.getState();
//   console.log(`三木森 现在体重为${current}`)
// };

// 通过 subscribe 订阅一个函数实现 redux 数据响应
// store.subscribe(watch);
// store.dispatch({type: 'eat'});

// store.dispatch({type: 'eat'});

// store.dispatch({type: 'eat'});

// store.dispatch({type: 'hungry'});


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




