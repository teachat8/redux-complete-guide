import React from 'react';
import { eat, hungry,eatAsync } from './teachat.redux';
import {connect} from 'react-redux';

class App extends React.Component {
  
  render() {
    // const store = this.props.store;
    // const num = store.getState();

    // react-redux
    const {num, eat, hungry, eatAsync} = this.props;

    return (
      <>
        <h2>teachat 当前的体重为{num}斤</h2>
        {/* 
        <button onClick={() => store.dispatch(eat())}>吃了一些山珍海味</button>
        <br/>
        <button onClick={() => store.dispatch(hungry())}>饿了一天</button> 
        */}


        <button onClick={() => eat()}>吃了一些山珍海味</button>
        <br/>
        <button onClick={() => eatAsync()}>等了一会儿，吃了一个煎饼</button>
        <br/>
        <button onClick={() => hungry()}>饿了一天</button>
      </>
    );
  }
}

// 把state 挂到 props上面
const mapStateToProps = (state) => {
  return {num: state}
};

// 把action 挂在到 props上面
const actionCreators = {eat, hungry, eatAsync}
export default connect(mapStateToProps, actionCreators)(App);
