import React from "react";
import { Header } from "./components/Header";
import { ExperienceList } from "./components/ExperienceList";
import { Education } from "./components/Education";
import { Side } from "./components/Side";
import './styles/App.css';
import avatar from './images/avatar.png';
import { MyDocument } from "./components/Document";
import { v4 as uuidv4 } from 'uuid';


class App extends React.Component {

  constructor(props){
    super(props);
    this.onEditBtn = this.onEditBtn.bind(this);
    this.onSubmitButton = this.onSubmitButton.bind(this);
    this.onAddBtn = this.onAddBtn.bind(this);
    this.state = {
      experience: {
        default:{
          position: 'Job Position',
          company: 'Company',
          startDateJob: 'Starting Date (MM/YYYY)',
          endDateJob: 'End Date (MM/YYYY)',
          description: 'Position description and main responsabilities',
          editMode: 'off'
        }
          
      },
      sideInfo: {
        mail: 'igomez.ap@gmail.com',
        phone: '0034 671197504',
        linkedin: 'linkedin.com/in/ignacio-gomez-aparicio/',
        editMode: 'off'
      },
      headInfo: {
        imgSrc: avatar,
        name: 'Ignacio Gómez Aparicio',
        currentPosition: 'Software Developer',
        editMode: 'off'
      },
      education: {
        degree: 'Industrial Engineering',
        university: 'University of Cantabria',
        location: 'Santander',
        endDate: 'July 2018',
        editMode: 'off'
      }
    }
  }


  onSubmitButton(e){
    const grandParent = e.target.parentNode.parentNode;
    const section = grandParent.id;
    const values = grandParent.querySelectorAll("input, textarea");
    const img = grandParent.querySelector('img');

    let obj = {};

    values.forEach(e => {
      let key = e.id;
      obj[`${key}`] = e.value;
    });

    if(img !== undefined){
      obj['imgSrc'] = avatar;
    };

    obj["editMode"] = 'off';

    this.setState({
      [section]: obj,
    })
  }

  onEditBtn(e){
    let section = e.target.parentNode.parentNode.id;
    let obj = this.state[section]
    obj["editMode"] = 'off';

    this.setState({
      [section]: obj
    })
  }

  onAddBtn(e){
    let section = e.target.parentNode.id;
    
    //Lets create an object representing the whole section
    const copy = {};
    Object.assign(copy, this.state[section]);
    console.log(copy)
    
    const key = uuidv4();
    copy[key] = {};
    Object.assign(copy[key],this.state[section].default);
    this.setState({
      [section]: copy
    })
  }

  render(){
    const {headInfo, sideInfo, education, experience} = this.state;
    return (
      <div id="container">
        <Header info={headInfo} onEditButton = {this.onEditBtn} onSubmitButton = {this.onSubmitButton}/>
        <Side info={sideInfo} onEditButton = {this.onEditBtn} onSubmitButton = {this.onSubmitButton}/>
        <Education info={education} onEditButton = {this.onEditBtn} onSubmitButton = {this.onSubmitButton}/>
        <ExperienceList 
        info={experience} 
        onEditButton = {this.onEditBtn} 
        onSubmitButton = {this.onSubmitButton}
        onAddButton = {this.onAddBtn}/>
        <MyDocument info={this.state}></MyDocument>
      </div>
    );
  }
}

export default App;
