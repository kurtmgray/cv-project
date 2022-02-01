import React, { Component } from 'react'
import Personal from './Form/Personal'
import Education from './Form/Education'
import Experience from './Form/Experience'
import PreviewCV from './Preview/PreviewCV'
import uniqid from "uniqid";


class Main extends Component {
  constructor(){
    super()

    // don't need to bind to this if using arrow functions? mitch clarify?

    // this.handlePersonalChange = this.handlePersonalChange.bind(this)
    // this.handleEducationChange = this.handleEducationChange.bind(this)
    // this.handleExperienceChange = this.handleExperienceChange.bind(this)
    // this.handleExperienceAdd = this.handleExperienceAdd.bind(this)
    // this.handleExperienceDelete = this.handleExperienceDelete.bind(this)

    this.state = {  
      personalState: {
        fName: '',
        lName: '',
        title: '',
        address: '',
        phone: '',
        email: '',
        description: '',
      },

      educationState: {
        educationArr: [{
          university: '',
          city: '',
          degree: '',
          major: '',
          attFrom: '',
          attUntil: '',
          edKey: uniqid(),
        }],
      },

      experienceState: {
        experienceArr: [{
          jobTitle: '',
          company: '',
          citySt: '',
          workFrom: '',
          workUntil: '',
          exKey: uniqid(),
        }],
      }  
    }
  }
  
  handlePersonalChange = (e) => {
    let personalState = {...this.state.personalState}
    personalState[e.target.name] = e.target.value
    this.setState({
      personalState
    })

    // first attempt... HAH

    // const targetName = event.target.name
    // const targetValue = event.target.value
    // const { fName, lName, title, address, phone, email, description } = this.state.personalState 
    // this.setState({
    //   personalState: {
    //       fName: targetName === 'fName' ? targetValue : fName,
    //       lName: targetName === 'lName' ? targetValue : lName,
    //       title: targetName === 'title' ? targetValue : title,
    //       address: targetName === 'address' ? targetValue : address,
    //       phone: targetName === 'phone' ? targetValue : phone,
    //       email: targetName === 'email' ? targetValue : email,
    //       description: targetName === 'description' ? targetValue : description,
    //   }
    //})
  }



  handleExperienceChange = (e) => {
    //create a copy
    let experienceArrCopy = [...this.state.experienceState.experienceArr]
    experienceArrCopy[e.target.id][e.target.name] = e.target.value
    this.setState({
      experienceState: {
        experienceArr: experienceArrCopy
      } 
    })
  }

  handleEducationChange = (e) => {
    let educationArrCopy = [...this.state.educationState.educationArr]
    educationArrCopy[e.target.id][e.target.name] = e.target.value
    this.setState({
      educationState: {
        educationArr: educationArrCopy
      }  
    })
  }

  handleExperienceAdd = () => {
    this.setState({
      experienceState: {
        experienceArr: [
          ...this.state.experienceState.experienceArr, 
          {
            jobTitle: '',
            company: '',
            citySt: '',
            workFrom: '',
            workUntil: '',
            exKey: uniqid()
          },
        ], 
      }    
    })
  }
  
  handleEducationAdd = () => {
    this.setState({
      educationState: {
        educationArr: [
          ...this.state.educationState.educationArr,
          {
            university: '',
            city: '',
            degree: '',
            major: '',
            attFrom: '',
            attUntil: '',
            edKey: uniqid(),
          }
        ]
      }
    })
  }

  handleExperienceDelete = (e) => {
    e.preventDefault()
    let experienceArrCopy = this.state.experienceState.experienceArr
    experienceArrCopy.splice(e.target.id, 1)
    this.setState({
      experienceState: {
        experienceArr: experienceArrCopy
      }  
    })
  }

  handleEducationDelete = (e) => {
    e.preventDefault()
    let educationArrCopy = this.state.educationState.educationArr
    educationArrCopy.splice(e.target.id, 1)
    this.setState({
      educationState: {
        educationArr: educationArrCopy
      }  
    })
  }

  render() {
    const { fName, lName, title, address, phone, email, description } = this.state.personalState
    
    // better to just map directly in the Main return?
    const experienceForms = this.state.experienceState.experienceArr.map((job, index) => {
      return (
        <Experience
          key={job.exKey}
          jobTitle={job.jobTitle} 
          company={job.company} 
          citySt={job.citySt} 
          workFrom={job.workFrom} 
          workUntil={job.workUntil}
          id={index}
          handleExperienceChange={this.handleExperienceChange}  
          handleExperienceDelete={this.handleExperienceDelete}
        />
      )
    })
    const educationForms = this.state.educationState.educationArr.map((school, index) => {
      return (
        <Education 
          key={school.edKey}  
          university={school.university}
          city={school.city}
          degree={school.degree}
          major={school.major}
          attFrom={school.attFrom}
          attUntil={school.attUntil}
          id={index}
          handleEducationChange={this.handleEducationChange}
          handleEducationDelete={this.handleEducationDelete}
        />
      )
    })
    
    return (
      <div>
        <h3 className="personal">Personal Information</h3>
        <Personal 
          fName={fName}
          lName={lName}
          title={title}
          address={address}
          phone={phone}
          email={email}
          description={description}
          handlePersonalChange={this.handlePersonalChange}
        />

        <h3 className="experience">Work Experience</h3>
        {experienceForms}
        <button onClick={this.handleExperienceAdd}>Add Work Experience</button>
 

        <h3 className="education">Education</h3>
        {educationForms}
        <button onClick={this.handleEducationAdd}>Add Education</button>

        <PreviewCV 
          personalState={this.state.personalState}
          experienceArr={this.state.experienceState.experienceArr}
          educationArr={this.state.educationState.educationArr}
        />
      </div>
    )
  }  
}

export default Main