import React from "react";
import '../styles/Education.css'

export class Education extends React.Component{

    constructor(props){
        super(props);
        this.onEditButton = this.onEditButton.bind(this);
        this.onSubmitButton = this.onSubmitButton.bind(this);
        this.onDeleteButton = this.onDeleteButton.bind(this);
    }

    onEditButton(e){
        this.props.onEditButton(e);
    }

    onSubmitButton(e){
        this.props.onSubmitButton(e);
    }

    onDeleteButton(e){
        this.props.onDeleteBtn(e);
    }


    render(){
        const {degree, university, location, endDate, editMode, id} = this.props.info;
        const toRender = [];
        if(editMode === 'off'){
            toRender.push(
                <div id={id}>
                    <button id='editEduBtn' onClick={this.onEditButton}>Edit</button>
                    <button className="deleteEduBtn" onClick={this.onDeleteButton}>Delete</button>
                    <h3 className="headerDegree">{degree}</h3>
                    <h5 className="headerUni">{university}</h5>
                    <h5 className="headerLocal">{location}</h5>
                    <h5 className="headerEndDate">{endDate}</h5>
                </div>
            )
        }else{
            toRender.push(
                <div id={id}>
                    <button className='submitEduBtn' onClick={this.onSubmitButton}>Submit</button>
                    <input id="degree" className="degree" type='text' defaultValue={degree}/>
                    <input id="university" className='university' type='text' defaultValue={university}/>
                    <input id="location" className='location' type='text' defaultValue={location}/>
                    <input id="endDate" className='endDate' type='text' defaultValue={endDate}/>
                </div>
            )
        }
        
        return(
            toRender
        );
    }
}