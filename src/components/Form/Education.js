import React, { Component } from 'react'

class Education extends Component {
  render() {
    return (
      <div id={this.props.id}>
        <form>
            <input 
              onChange={this.props.handleEducationChange}
              id={this.props.id}
              className="one-line" 
              type="text" 
              name="university" 
              placeholder="University"
              value={this.props.university}>
            </input>
            <input 
              onChange={this.props.handleEducationChange}
              id={this.props.id}
              className="one-line" 
              type="text" 
              name="city" 
              placeholder="City"
              value={this.props.city}>
            </input>
            <input 
              onChange={this.props.handleEducationChange}
              id={this.props.id}
              className="one-line" 
              type="text" 
              name="degree" 
              placeholder="Degree"
              value={this.props.degree}>
            </input>                
            <input 
              onChange={this.props.handleEducationChange}
              id={this.props.id}
              className="one-line" 
              type="text" 
              name="major" 
              placeholder="Major"
              value={this.props.major}>
            </input>                
            <input 
              onChange={this.props.handleEducationChange}
              id={this.props.id}
              className="one-line" 
              type="text" 
              name="attFrom" 
              placeholder="Attended from"
              value={this.props.attFrom}>
            </input>                
            <input 
              onChange={this.props.handleEducationChange}
              id={this.props.id}
              className="one-line" 
              type="text" 
              name="attUntil" 
              placeholder="Attended until"
              value={this.props.attUntil}>
            </input>
            <button onClick={this.props.handleEducationDelete} name="deleteEducation" id={this.props.id}>Delete</button>
        </form>
      </div>
      )
    }  
  }

export default Education