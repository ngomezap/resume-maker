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

    onEditButton(e){
        this.props.onEditButton(e);
    }

    onSubmitButton(e){
        this.props.onSubmitButton(e);
    }

    render(){
        const {imgSrc, name, currentPosition, editMode} = this.props.info;
        
        const toRender = [];
        if(editMode === 'off'){
            toRender.push(
                <div>
                    <button id='editHeadBtn' onClick={this.onEditButton}>Edit</button>
                    <img id='profilePic' src={imgSrc} alt='profile_pic'/>
                    <h1 id="nameHeader">{name}</h1>
                    <h4 id="positionHeader">{currentPosition}</h4>
                </div>
            )
        }else{
            toRender.push(
                <div>
                    <button id='submitHeadBtn' type='submit' onClick={this.onSubmitButton}>Submit</button>
                    <img id='profilePic' src={imgSrc} alt='profile_pic'/>
                    <input id='name' type='text' defaultValue={name} autoFocus/>
                    <input id='currentPosition' type='text' defaultValue={currentPosition}/>
                    
                </div>
            )
        }
        
        return(
            <header id='headInfo'>{toRender}</header>
        );
    }

}