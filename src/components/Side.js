import React from "react";

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

    onEditButton(){
        this.setState({
            editMode: 'on'
        });
    }

    onSubmitButton(e){
        e.preventDefault();
        const mail = e.target.parentNode.querySelector('#inputMail').value;
        const phone = e.target.parentNode.querySelector('#inputPhone').value;
        const linkedin = e.target.parentNode.querySelector('#inputLinkedin').value;

        this.setState({
            mail: mail,
            phone: phone,
            linkedin: linkedin,
            editMode: 'off'
        });
    }

    render(){
        const {mail, phone, linkedin} = this.state;

        const toRender = [];
        if(this.state.editMode === 'off'){
            toRender.push(
                <div>
                    <h6>Email: {mail}</h6>
                    <h6>Tel: {phone}</h6>
                    <h6>LinkedIn: {linkedin}</h6>
                    <button id='editSideBtn' onClick={this.onEditButton}>Edit</button>
                </div>
            )
        }else{
            toRender.push(
                <div>
                    <form>
                        <input id='inputMail' type='text' defaultValue={mail}/>
                        <input id='inputPhone' type='text' defaultValue={phone}/>
                        <input id='inputLinkedin' type='text' defaultValue={linkedin}/>
                        
                        <button id='submitSideBtn' type='submit' onClick={this.onSubmitButton}>Submit</button>
                    </form>
                </div>
            )
        }
        
        return(
            <section id='sideInfo'>{toRender}</section>
        );
    }
}