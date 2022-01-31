import React, { Component } from 'react'
import Personal from './Form/Personal'
import Education from './Form/Education'
import Experience from './Form/Experience'
import PreviewCV from './Preview/PreviewCV'
import uniqid from "uniqid";


class Main extends Component {
  constructor(){
    super()
    this.handlePersonalChange = this.handlePersonalChange.bind(this)
    this.handleEducationChange = this.handleEducationChange.bind(this)
    this.handleExperienceChange = this.handleExperienceChange.bind(this)
    this.handleExperienceAdd = this.handleExperienceAdd.bind(this)
    this.handleExperienceDelete = this.handleExperienceDelete.bind(this)

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
        educationArr: [],
        details: {
          university: '',
          city: '',
          degree: '',
          major: '',
          attFrom: '',
          attUntil: '',
          edKey: uniqid(),

        } 
      },
      experienceState: {
        experienceArr: [],
        details: {
            jobTitle: '',
            company: '',
            citySt: '',
            workFrom: '',
            workUntil: '',
            exKey: uniqid(),
        }        
      }
    }
  }  
  
  handlePersonalChange = (event) => {
    const targetName = event.target.name
    const targetValue = event.target.value
    const { fName, lName, title, address, phone, email, description } = this.state.personalState 
    this.setState({
      personalState: {
          fName: targetName === 'fName' ? targetValue : fName,
          lName: targetName === 'lName' ? targetValue : lName,
          title: targetName === 'title' ? targetValue : title,
          address: targetName === 'address' ? targetValue : address,
          phone: targetName === 'phone' ? targetValue : phone,
          email: targetName === 'email' ? targetValue : email,
          description: targetName === 'description' ? targetValue : description,
      }
    })
    console.log(this.state.personalState)
  }

  handleEducationChange = (event) => {
    const targetName = event.target.name
    const targetValue = event.target.value
    const { university, city, degree, major, attFrom, attUntil, id} = this.state.educationState.details
    this.setState({
      educationState: {
        details: {
          university: targetName === 'university' ? targetValue : university,
          city: targetName === 'city' ? targetValue : city,
          degree: targetName === 'degree' ? targetValue : degree,
          major: targetName === 'major' ? targetValue : major,
          attFrom: targetName === 'attFrom' ? targetValue : attFrom,
          attUntil: targetName === 'attUntil' ? targetValue : attUntil,
          id: id
        },
        educationArr: [this.state.educationState.details],
      }
    })
    console.log(this.state.experienceState)
  }

  handleExperienceChange = (event) => {
    event.preventDefault()
    const targetName = event.target.name
    const targetValue = event.target.value
    console.log(event)
    const { jobTitle, company, citySt, workFrom, workUntil, } = this.state.experienceState.details
    this.setState({
      experienceState: {
        details: {
          jobTitle: targetName === 'jobTitle' ? targetValue : jobTitle,
          company: targetName === 'company' ? targetValue : company,
          citySt: targetName === 'citySt' ? targetValue : citySt,
          workFrom: targetName === 'workFrom' ? targetValue : workFrom,
          workUntil: targetName === 'workUntil' ? targetValue : workUntil,
          //key: key
        },
        experienceArr: [this.state.experienceState.details],
      }
    })
    console.log(this.state)
  }

  handleExperienceAdd = (event) => {
    event.preventDefault()
    console.log(event)
    
    this.setState({
      experienceState: {
        
        details: {
          jobTitle: '',
          company: '',
          citySt: '',
          workFrom: '',
          workUntil: '',
          key: uniqid(),
        },
        experienceArr: this.state.experienceState.experienceArr.concat(this.state.experienceState.details)  
      }  
    })
    console.log(this.state.experienceState)
  }
  
  handleExperienceDelete = (event) => {
    event.preventDefault()
    console.log(event)
  }

  render() {
    const { fName, lName, title, address, phone, email, description } = this.state.personalState
    const { university, city, degree, major, attFrom, attUntil, edKey } = this.state.educationState.details
    const { jobTitle, company, citySt, workFrom, workUntil, exKey } = this.state.experienceState.details

    return (
      <div>
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
        <Experience 
          jobTitle={jobTitle}
          company={company}
          citySt={citySt}
          workFrom={workFrom}
          workUntil={workUntil}
          key={exKey}
          handleExperienceChange={this.handleExperienceChange}  
          handleExperienceAdd={this.handleExperienceAdd}
          handleexperienceDelete={this.handleExperienceDelete}
        /> 
        <h3 className="education">Education</h3>
        <Education 
          university={university}
          city={city}
          degree={degree}
          major={major}
          attFrom={attFrom}
          attUntil={attUntil}
          key={edKey}
        />

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