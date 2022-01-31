import React, { Component } from "react";

export default class EducationItem extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.university}</h3>
        <p>{this.props.city}</p>
        <p>{this.props.degree}</p>
        <p>{this.props.major}</p>
        <p>{this.props.attFrom}-{this.props.attUntil}</p>
      </div>
    )
  }
}