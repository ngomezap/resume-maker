import React from "react";
import { Header } from "./components/Header";
import { ExperienceList } from "./components/ExperienceList";
import { EducationList } from "./components/EducationList";
import { Side } from "./components/Side";
import './styles/App.css';
import avatar from './images/avatar.png';
import { MyDocument } from "./components/Document";
import { v4 as uuidv4 } from 'uuid';
import {defaultEdu, defaultExp, defaultHead, defaultSide} from './components/DefaultInfo'


class App extends React.Component {

  constructor(props){
    super(props);
    this.onEditBtn = this.onEditBtn.bind(this);
    this.onSubmitButton = this.onSubmitButton.bind(this);
    this.onAddBtn = this.onAddBtn.bind(this);
    this.onDeleteBtn = this.onDeleteBtn.bind(this);
    this.onUpdatePhoto = this.onUpdatePhoto.bind(this);
    this.state = {
      experience: {
        defaultExp: defaultExp
      },
      sideInfo: {
        defaultSide: defaultSide
      },
          
      headInfo: {
        defaultHead: defaultHead
      },
      education: {
        defaultEdu: defaultEdu
      }
    }
  }

  onUpdatePhoto(e){
    
    let obj = {};
    Object.assign(obj, this.state['headInfo']);
    obj['defaultHead']['imgSrc'] = URL.createObjectURL(e.target.files[0]);
    

    this.setState({
      'headInfo': obj
    });

    console.log(this.state)
    e.stopPropagation();
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
    
    //Get the section (Education, Experience, etc)
    let section = e.target.parentNode.parentNode.id;
    //Get the specific subsection id
    let key = e.target.parentNode.id;

    //Fill the created obj with the current state
    let obj = {};
    Object.assign(obj, this.state[section]);

    //change the editMode state of the selected subsection
    obj[key]["editMode"] = 'on';

    this.setState({
      [section]: obj
    })

    //it is necessary to stop propagation so the ADD listenes do not trigger
    e.stopPropagation();

  }

  onDeleteBtn(e){

    let section = e.target.parentNode.parentNode.id;
    let key = e.target.parentNode.id;

    let obj = {};
    Object.assign(obj, this.state[section]);
    delete obj[key];

    this.setState({
      [section]: obj
    })
  }

  onAddBtn(e){
    let section = e.target.parentNode.id;

    //Add button is only in education and experience sections
    //it is necessary to differentiate the default obj
    let def = {};
    if(section === 'experience'){
      def = defaultExp;
    }else{
      def = defaultEdu;
    }
    
    //Lets create an object representing the whole section
    const copy = {};
    Object.assign(copy, this.state[section]);
    
    const key = uuidv4();
    copy[key] = {};
    
    Object.assign(copy[key], def);
    copy[key].id = key;
    copy[key].editMode = 'on';
    this.setState({
      [section]: copy
    })
  }

  render(){
    const {headInfo, sideInfo, education, experience} = this.state;
    return (
      <div>
        <MyDocument info={this.state}></MyDocument>
        <div id="container">
        <Header 
          info={headInfo} 
          onEditButton = {this.onEditBtn} 
          onSubmitButton = {this.onSubmitButton}
          onUpdatePhoto = {this.onUpdatePhoto}/>
        <Side 
          info={sideInfo} 
          onEditButton = {this.onEditBtn} 
          onSubmitButton = {this.onSubmitButton}/>
        <EducationList 
          info={education} 
          onEditButton = {this.onEditBtn} 
          onSubmitButton = {this.onSubmitButton}
          onAddButton = {this.onAddBtn}
          onDeleteButton = {this.onDeleteBtn}/>
        <ExperienceList 
          info={experience} 
          onEditButton = {this.onEditBtn} 
          onSubmitButton = {this.onSubmitButton}
          onAddButton = {this.onAddBtn}
          onDeleteButton = {this.onDeleteBtn}/>
        </div>
      </div>
    );
  }
}

export default App;
