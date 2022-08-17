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
        const {position, company, startDateJob, endDateJob, description, editMode, id} = this.props.info;

        const toRender = [];
        if(editMode === 'off'){
            toRender.push(
                <div id={id}>
                    <button className='editExpBtn' onClick={this.onEditButton}>Edit</button>
                    <h3 className="expPos">{position}</h3>
                    <h5 className="expCom">{company}</h5>
                    <h5 className="expDate">{startDateJob} - {endDateJob}</h5>
                    <p className="expDesc">{description}</p>
                </div>
            )
        }else{
            toRender.push(
                <div id={id}>
                    <button className='submitExpBtn' type='submit' onClick={this.onSubmitButton}>Submit</button>
                    <input className='position' type='text' defaultValue={position}/>
                    <input className='company' type='text' defaultValue={company}/>
                    <div className="expDateIpt">
                        <input className='startDateJob' defaultValue={startDateJob}/>
                        <input className='endDateJob' defaultValue={endDateJob}/>
                    </div>
                    <textarea className='description' defaultValue={description}/>                        
                </div>
            )
        }
        
        return(
            toRender
        );
    }
}