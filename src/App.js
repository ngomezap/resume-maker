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
        defaultExp:{
          id: 'defaultExp',
          position: 'Job Position',
          company: 'Company',
          startDateJob: 'Starting Date (MM/YYYY)',
          endDateJob: 'End Date (MM/YYYY)',
          description: 'Position description and main responsabilities',
          editMode: 'off'
        }
          
      },
      sideInfo: {
        defaultSide:{
          id: 'defaultSide',
          mail: 'igomez.ap@gmail.com',
          phone: '0034 671197504',
          linkedin: 'linkedin.com/in/ignacio-gomez-aparicio/',
          editMode: 'off'
        }
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
    const parent = e.target.parentNode;
    const key = parent.id;
    const section = grandParent.id;
    const values = parent.querySelectorAll("input, textarea");
    const img = grandParent.querySelector('img');

    let obj = {};
    Object.assign(obj, this.state[section]);

    values.forEach(e => {
      let k = e.className;
      obj[key][`${k}`] = e.value;
    });
    
    console.log(img)
    if(img !== null){
      obj['imgSrc'] = avatar;
    };

    obj[key]["editMode"] = 'off';

    this.setState({
      [section]: obj,
    })

    e.stopPropagation();
  }

  onEditBtn(e){
    let section = e.target.parentNode.parentNode.id;
    let key = e.target.parentNode.id;
    let obj = {};

    Object.assign(obj, this.state[section]);

    obj[key]["editMode"] = 'on';

    this.setState({
      [section]: obj
    })
    e.stopPropagation();

  }

  onAddBtn(e){
    let section = e.target.parentNode.id;
    
    //Lets create an object representing the whole section
    const copy = {};
    Object.assign(copy, this.state[section]);
    
    const key = uuidv4();
    copy[key] = {};
    console.log(section)
    Object.assign(copy[key],this.state[section].default);
    copy[key].id = key;
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
        <Education 
          info={education} 
          onEditButton = {this.onEditBtn} 
          onSubmitButton = {this.onSubmitButton}/>
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
