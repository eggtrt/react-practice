import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) { // 리렌더링 여부 결정
    console.log("shouldComponentUpdate", nextProps, nextState);
    // 숫자의 마지막 자리가 4면 리렌더링하지 않습니다
    return nextState.number % 10 !== 4;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) { // 변화가 일어나기 직전 특정값 반환
    console.log("getSnapshotBeforeUpdate");
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }
  state = {
    counter: 0,
    fixed: 1
  };
  handleIncrease = () => {
    this.setState(
      {
        counter: this.state.counter + 1
      },
      () => {
        console.log(this.state.counter);
      }
    );
  };

  handleDecrease = () => {
    this.setState(state => ({
      counter: state.counter - 1
    }));
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
        <p>고정된 값: {this.state.fixed}</p>
      </div>
    );
  }
}

export default Counter;