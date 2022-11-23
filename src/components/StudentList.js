import React, { Component } from "react";
import StudentItem from "./StudentItem";

class StudentList extends Component {
  studentName = "hieu";
  studentAge = 20;
  render() {
    return (
      <div style={{ backgroundColor: "green", padding: 30 }}>
        <h1>StudentList</h1>

        <StudentItem name={this.studentName} age={this.studentAge} />
        <StudentItem name="hung" age="25" />
      </div>
    );
  }
}

export default StudentList;
