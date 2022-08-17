import React from "react";
import { Header } from "./components/Header";
import { ExperienceList } from "./components/ExperienceList";
import { Side } from "./components/Side";
import './styles/App.css';
import avatar from './images/avatar.png';
import { MyDocument } from "./components/Document";
import { v4 as uuidv4 } from 'uuid';
import { EducationList } from "./components/EducationList";


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
        defaultHead:{
          id: 'defaultHead',
          imgSrc: avatar,
          name: 'Ignacio Gómez Aparicio',
          currentPosition: 'Software Developer',
          editMode: 'off'
        }
      },
      education: {
        defaultEdu:{
          degree: 'Industrial Engineering',
          university: 'University of Cantabria',
          location: 'Santander',
          endDate: 'July 2018',
          editMode: 'off',
          id: 'defaultEdu'
        }
        
      }
    }
  }


  onSubmitButton(e){
    const grandParent = e.target.parentNode.parentNode;
    const parent = e.target.parentNode;

    //Get the parent id and the section name (using the grandpa id)
    const key = parent.id;
    const section = grandParent.id;
    
    //select every input and textarea value to put it back on preview mode
    const values = parent.querySelectorAll("input, textarea");
    const img = grandParent.querySelector('img');

    //now and object is conform to keep the other experiences and
    //add the new changes
    let obj = {};
    Object.assign(obj, this.state[section]);

    values.forEach(e => {
      let k = e.className;
      obj[key][`${k}`] = e.value;
    });
    

    //in case the modification is on the header
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

    //Add button is only in education and experience sections
    //it is necessary to differentiate the default obj
    let def;
    if(section === 'experience'){
      def = 'defaultExp';
    }else{
      def = 'defaultEdu';
    }
    
    //Lets create an object representing the whole section
    const copy = {};
    Object.assign(copy, this.state[section]);
    
    const key = uuidv4();
    copy[key] = {};
    
    Object.assign(copy[key],this.state[section][def]);
    copy[key].id = key;
    copy[key].editMode = 'on';
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
        <EducationList 
          info={education} 
          onEditButton = {this.onEditBtn} 
          onSubmitButton = {this.onSubmitButton}
          onAddButton = {this.onAddBtn}/>
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
