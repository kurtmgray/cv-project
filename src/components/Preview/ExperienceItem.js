import React, { Component } from "react";

export default class ExperienceItem extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.jobTitle}</h3>
        <p>{this.props.company}</p>
        <p>{this.props.citySt}</p>
        <p>{this.props.workFrom}-{this.props.workUntil}</p>
      </div>
    )
  }
}