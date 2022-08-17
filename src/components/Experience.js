import React from "react";
import '../styles/Experience.css';



export class Experience extends React.Component{

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
        const {position, company, startDateJob, endDateJob, description, editMode} = this.props.info;

        const toRender = [];
        if(editMode === 'off'){
            toRender.push(
                <div>
                    <button id='editExpBtn' onClick={this.onEditButton}>Edit</button>
                    <h3 className="expPos">{position}</h3>
                    <h5 className="expCom">{company}</h5>
                    <h5 className="expDate">{startDateJob} - {endDateJob}</h5>
                    <p className="expDesc">{description}</p>
                </div>
            )
        }else{
            toRender.push(
                <div>
                    <button id='submitExpBtn' type='submit' onClick={this.onSubmitButton}>Submit</button>
                    <input id="position" className='inputExpPos' type='text' defaultValue={position}/>
                    <input id="company" className='inputExpCom' type='text' defaultValue={company}/>
                    <div className="expDateIpt">
                        <input id="startDateJob" className='inputExpIniDate' type='month' defaultValue={startDateJob}/>
                        <input id="endDateJob" className='inputExpEndDate' type='month' defaultValue={endDateJob}/>
                    </div>
                    <textarea id="description" className='inputExpDesc' defaultValue={description}/>                        
                </div>
            )
        }
        
        return(
            toRender
        );
    }
}