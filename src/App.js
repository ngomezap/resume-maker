import React from "react";
import { Header } from "./components/Header";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Side } from "./components/Side";
import './styles/App.css';
import avatar from './images/avatar.png';


class App extends React.Component {

  constructor(props){
    super(props);
    this.onEditBtn = this.onEditBtn.bind(this);
    this.onSubmitButton = this.onSubmitButton.bind(this);
    this.state = {
      experience: {
        position: 'Solar technician',
        company: 'Ingeteam UK ltd.',
        startDateJob: 'January 2020',
        endDateJob: 'August 2020',
        description: 'Only engineer in charge of tow solar farms of 5MW and 10MW',
        editMode: 'off'
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
    obj["editMode"] = 'on';

    this.setState({
      [section]: obj
    })
  }


  render(){
    const {headInfo, sideInfo, education, experience} = this.state;
    return (
      <div id="container">
        <Header info={headInfo} onEditButton = {this.onEditBtn} onSubmitButton = {this.onSubmitButton}/>
        <Side info={sideInfo} onEditButton = {this.onEditBtn} onSubmitButton = {this.onSubmitButton}/>
        <Education info={education} onEditButton = {this.onEditBtn} onSubmitButton = {this.onSubmitButton}/>
        <Experience info={experience} onEditButton = {this.onEditBtn} onSubmitButton = {this.onSubmitButton}/>
      </div>
    );
  }
}

export default App;
