import React, { Component } from 'react'

class Experience extends Component {

    render() {
      return (
        <div id={this.props.id}>
          <form>
            <input 
              onChange={this.props.handleExperienceChange}
              id={this.props.id}
              className="one-line" 
              type="text" 
              name="jobTitle" 
              placeholder="Job Title"
              value={this.props.jobTitle}>
            </input>
            <input 
              onChange={this.props.handleExperienceChange}
              id={this.props.id}
              className="one-line" 
              type="text" 
              name="company" 
              placeholder="Company"
              value={this.props.company}>
            </input>
            <input 
              onChange={this.props.handleExperienceChange}
              className="one-line"               
              id={this.props.id}
              type="text" 
              name="citySt" 
              placeholder="City, State"
              value={this.props.citySt}>
            </input>
            <input 
              onChange={this.props.handleExperienceChange}
              className="one-line" 
              id={this.props.id}
              type="text" 
              name="workFrom" 
              placeholder="Worked from"
              value={this.props.workFrom}>
            </input>
            <input 
              onChange={this.props.handleExperienceChange}
              id={this.props.id}
              className="one-line" 
              type="text" 
              name="workUntil" 
              placeholder="Worked until"
              value={this.props.workUntil}>
            </input>
            <button onClick={this.props.handleExperienceDelete} id={this.props.id}>Delete</button>
          </form>
        </div>
      )
    }  
  }

export default Experience