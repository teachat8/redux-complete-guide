import React from 'react';
import { eat, hungry } from './teachat.redux';


class App extends React.Component {
  
  render() {
    const store = this.props.store;
    const num = store.getState();

    return (
      <>
        <h2>teachat 当前的体重为{num}斤</h2>

        <button onClick={() => store.dispatch(eat())}>吃了一些山珍海味</button>
        <br/>
        <button onClick={() => store.dispatch(hungry())}>饿了一天</button>
      </>
    );
  }
}

export default App;
