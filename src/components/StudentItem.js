import React, { Component } from "react";

class StudentItem extends Component {
  render() {

    return (
      <div style={{ backgroundColor: "yellow", padding: 10 }}>
        <h1>Student Item</h1>
        <h4>Name: {this.props.name}</h4>
        <h4>Age: {this.props.age}</h4>
      </div>
    );
  }
}

export default StudentItem;
