import React from "react";
import { Header } from "./components/Header";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Side } from "./components/Side";
import './styles/App.css';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    const {headInfo, sideInfo, education, experience} = this.props;
    return (
      <div id="container">
        <Header info={headInfo}/>
        <Side info={sideInfo}/>
        <Education info={education}/>
        <Experience info={experience}/>
      </div>
    );
  }
}

export default App;
