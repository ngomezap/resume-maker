import React from "react";
import '../styles/Education.css'

export class Education extends React.Component{

    constructor(props){
        super(props);
        this.onEditButton = this.onEditButton.bind(this);
        this.onSubmitButton = this.onSubmitButton.bind(this);
    }

    onEditButton(e){
        this.props.onEditButton(e);
    }

    onSubmitButton(e){
        this.props.onSubmitButton(e);
    }


    render(){
        const {degree, university, location, endDate, editMode} = this.props.info;
        const toRender = [];
        if(editMode === 'off'){
            toRender.push(
                <div>
                    <button id='editEduBtn' onClick={this.onEditButton}>Edit</button>
                    <h1>Education</h1>
                    <h3 className="headerDegree">{degree}</h3>
                    <h5 className="headerUni">{university}</h5>
                    <h5 className="headerLocal">{location}</h5>
                    <h5 className="headerEndDate">{endDate}</h5>
                </div>
            )
        }else{
            toRender.push(
                <div>
                    <button id='submitEduBtn' type='submit' onClick={this.onSubmitButton}>Submit</button>
                    <h1>Education</h1>
                    <input id="degree" className="inputDegree" type='text' defaultValue={degree}/>
                    <input id="university" className='inputUniversity' type='text' defaultValue={university}/>
                    <input id="location" className='inputLocation' type='text' defaultValue={location}/>
                    <input id="endDate" className='inputEndDate' type='text' defaultValue={endDate}/>
                </div>
            )
        }
        
        return(
            <section id='education'>{toRender}</section>
        );
    }
}