import React, { Component } from "react";
import styles from "./DemoDataBinding.module.css";
// styles = {title, btn}
import clsx from "clsx";

class DemoDataBinding extends Component {
  fullName = "Hiếu Đặng";
  age = 27;
  state = {
    isLogin: false,
    // a: 1,
    // b: 2,
  };

  showMessage() {
    return <h1>Hello world</h1>;
  }
  showAlert() {
    alert("Warning....");
  }
  showAlert2(message) {
    alert(message);
  }
  showAlert3 = () => {
    console.log(this);
    alert(this.fullName + this.age);
  };

  handleLogin = () => {
    //immutable
    this.setState({
      isLogin: true,
    });
  };

  handleLogout = () => {
    this.setState({
      isLogin: false,
    });
  };

  renderLogin() {
    if (this.state.isLogin) {
      return (
        <div
          style={{
            backgroundColor: "yellow",
            width: 300,
            padding: 30,
          }}
        >
          <h1 className={styles.title}>
            <span> Welcome, Hieu Dang</span>
          </h1>
          <button
            className={clsx(styles.btn, styles.btn1, {
              [styles.btn2]: false,
            })}
            onClick={this.handleLogout}
          >
            Log out
          </button>
        </div>
      );
    }
    return (
      <button className={styles.btn} onClick={this.handleLogin}>
        {" "}
        Login{" "}
      </button>
    );
  }

  render() {
    return (
      <div>
        {this.renderLogin()}

        {/* <h1>
          Hello, {this.fullName}. I'm {this.age - 7}{" "}
        </h1>
        <p>Cybersoft</p>
        {this.showMessage()}
        <button onClick={this.showAlert}>Alert 1</button>
        <button
          onClick={() => {
            this.showAlert2("hello");
          }}
        >
          Alert 2
        </button>

        <button onClick={this.showAlert3}>Alert 3</button> */}
      </div>
    );
  }
}

export default DemoDataBinding;
