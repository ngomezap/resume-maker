import React from "react";
import '../styles/Side.css';
import { FcPhone } from "react-icons/fc";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";

export class Side extends React.Component{

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
        const {mail, phone, linkedin, editMode, id} = this.props.info.defaultSide;

        const toRender = [];
        if(editMode === 'off'){
            toRender.push(
                <div id={id}>
                    <button id='editSideBtn' onClick={this.onEditButton}>Edit</button>
                    <AiFillMail></AiFillMail>
                    <h5>{mail}</h5>
                    <FcPhone></FcPhone>
                    <h5>{phone}</h5>
                    <AiFillLinkedin></AiFillLinkedin>
                    <h5>{linkedin}</h5>
                </div>
            )
        }else{
            toRender.push(
                <div id={id}>
                    <button className='submitSideBtn' type='submit' onClick={this.onSubmitButton}>Submit</button>
                    <AiFillMail></AiFillMail>
                    <input className='mail' type='text' defaultValue={mail}/>
                    <FcPhone></FcPhone>
                    <input className='phone' type='text' defaultValue={phone}/>
                    <AiFillLinkedin></AiFillLinkedin>
                    <input className='linkedin' type='text' defaultValue={linkedin}/>                        
                </div>
            )
        }
        
        return(
            <section id='sideInfo'>{toRender}</section>
        );
    }
}