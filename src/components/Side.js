import React from "react";
import '../styles/Side.css'

export class Side extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            mail: 'igomez.ap@gmail.com',
            phone: '0034 671197504',
            linkedin: 'linkedin.com/in/ignacio-gomez-aparicio/',
            editMode: 'off'
        }
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
        const {mail, phone, linkedin, editMode} = this.props.info;

        const toRender = [];
        if(editMode === 'off'){
            toRender.push(
                <div>
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
                <div>
                    <button id='submitSideBtn' type='submit' onClick={this.onSubmitButton}>Submit</button>
                    <p>Email: </p>
                    <input id='mail' type='text' defaultValue={mail}/>
                    <p>Tel: </p>
                    <input id='phone' type='text' defaultValue={phone}/>
                    <p>LinkedIn:</p>
                    <input id='linkedin' type='text' defaultValue={linkedin}/>                        
                </div>
            )
        }
        
        return(
            <section id='sideInfo'>{toRender}</section>
        );
    }
}