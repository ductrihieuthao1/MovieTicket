import React, { Component, PureComponent } from "react";
// outsource: Dinosys
// product:
class Demo extends Component  {
  // lifecycle mounting: methods sẽ chạy khi khởi tạo component
  constructor(props) {
    super(props);
    this.state = {
      g: 1,
      f: true,
      count: props.a,
    };
  }

  static getDerivedStateFromProps(nextProps, currentState) {
    return {
      ...currentState,
      count: nextProps.a,
    };
    // currentState = {count: 1}
    // {g:1, f:2, count: 1, count: 2} = {g:1, f:2, count: 2}
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>Demo Lifecycle</h1>
        <h2>Count: {this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase count
        </button>
      </div>
    );
  }

  componentDidMount() {
    // callApi()
    console.log("componentDidMount");
  }
  // Lifecycle updating:
  // shouldComponentUpdate: kiểm tra props component nhận vào
  // khi component cha cập nhật lại, chúng ta sẽ kiểm tra xem
  // props nhận vào có thay đổi gì không, nếu không thay đổi,
  // thì không cần render lại
  //   shouldComponentUpdate(nextProps, nextState) {
  //     if (this.props.b !== nextProps.b || this.state.count !== nextState.count) {
  //       return true;
  //     }
  //     return false;
  //   }

  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  // lifecycle unmounting
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
}

export default Demo;
