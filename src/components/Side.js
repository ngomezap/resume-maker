import React from "react";
import '../styles/Side.css'

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
                    <p>Email: </p>
                    <h5>{mail}</h5>
                    <p>Tel: </p>
                    <h5>{phone}</h5>
                    <p>LinkedIn:</p>
                    <h5>{linkedin}</h5>
                </div>
            )
        }else{
            toRender.push(
                <div id={id}>
                    <button className='submitSideBtn' type='submit' onClick={this.onSubmitButton}>Submit</button>
                    <p>Email: </p>
                    <input className='mail' type='text' defaultValue={mail}/>
                    <p>Tel: </p>
                    <input className='phone' type='text' defaultValue={phone}/>
                    <p>LinkedIn:</p>
                    <input className='linkedin' type='text' defaultValue={linkedin}/>                        
                </div>
            )
        }
        
        return(
            <section id='sideInfo'>{toRender}</section>
        );
    }
}