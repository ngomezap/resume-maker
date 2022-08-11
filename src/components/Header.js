import React from "react";
import '../styles/Header.css';
import avatar from '../images/avatar.png';

export class Header extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            imgSrc: avatar,
            name: 'Ignacio Gómez Aparicio',
            position: 'Software Developer',
            editMode: 'off'
        }
        this.onEditButton = this.onEditButton.bind(this);
        this.onSubmitButton = this.onSubmitButton.bind(this);
    };

    onEditButton(){
        this.setState({
            editMode: 'on'
        });
    }

    onSubmitButton(e){
        e.preventDefault();
        const name = e.target.parentNode.querySelector('#inputName').value;
        const position = e.target.parentNode.querySelector('#inputPosition').value;

        this.setState({
            name: name,
            position: position,
            editMode: 'off',
        });
    }

    render(){
        const {imgSrc, name, position} = this.state;
        
        const toRender = [];
        if(this.state.editMode === 'off'){
            toRender.push(
                <div>
                    <button id='editHeadBtn' onClick={this.onEditButton}>Edit</button>
                    <img id='profilePic' src={imgSrc} alt='profile_pic'/>
                    <h1 id="nameHeader">{name}</h1>
                    <h4 id="positionHeader">{position}</h4>
                </div>
            )
        }else{
            toRender.push(
                <div>
                    <button id='submitHeadBtn' type='submit' onClick={this.onSubmitButton}>Submit</button>
                    <img id='profilePic' src={imgSrc} alt='profile_pic'/>
                    <input id='inputName' type='text' defaultValue={name} autoFocus/>
                    <input id='inputPosition' type='text' defaultValue={position}/>
                    
                </div>
            )
        }
        
        return(
            <header id='headInfo'>{toRender}</header>
        );
    }

}