import React, { Component } from 'react'

class Personal extends Component {
  render() {
      
      return (
        <div>
            <form>
                <input 
                  onChange={this.props.handlePersonalChange}
                  className="one-line" 
                  type="text" 
                  name="fName" 
                  placeholder="First name"
                  value={this.props.fName}>
                </input>
                <input 
                  onChange={this.props.handlePersonalChange}
                  className="one-line" 
                  type="text" 
                  name="lName" 
                  placeholder="Last name"
                  value={this.props.lName}>
                </input>
                <input
                  onChange={this.props.handlePersonalChange} 
                  className="one-line" 
                  type="text" 
                  name="title"
                  placeholder="Title"
                  value={this.props.title}>
                </input>
                <input
                  onChange={this.props.handlePersonalChange} 
                  className="one-line" 
                  type="text" 
                  name="address" 
                  placeholder="Address"
                  value={this.props.address}>
                </input>
                <input
                  onChange={this.props.handlePersonalChange} 
                  className="one-line" 
                  type="text" 
                  name="phone" 
                  placeholder="Phone number"
                  value={this.props.phone}>
                </input>
                <input
                  onChange={this.props.handlePersonalChange} 
                  className="one-line" 
                  type="text" 
                  name="email" 
                  placeholder="Email"
                  value={this.props.email}>
                </input>
                <textarea
                  onChange={this.props.handlePersonalChange} 
                  className="three-line" 
                  type="text" 
                  name="description" 
                  placeholder="Description"
                  value={this.props.description}>
                </textarea>
            </form>
    
        </div>
      )
    }  
  }

export default Personal