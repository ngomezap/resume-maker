import React from "react";
import '../styles/Header.css';

export class Header extends React.Component{

    constructor(props){
        super(props);
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
        const {imgSrc, name, currentPosition, editMode, id, descHeader} = this.props.info.defaultHead;
        
        const toRender = [];
        if(editMode === 'off'){
            toRender.push(
                <div id={id}>
                    <button id='editHeadBtn' onClick={this.onEditButton}>Edit</button>
                    <img className='profilePic' src={imgSrc} alt='profile_pic'/>
                    <h1 id="nameHeader">{name}</h1>
                    <h4 id="positionHeader">{currentPosition}</h4>
                    <p id="descHeader">{descHeader}</p>
                </div>
            )
        }else{
            toRender.push(
                <div id={id}>
                    <button id='submitHeadBtn' type='submit' onClick={this.onSubmitButton}>Submit</button>
                    <img className='profilePic' src={imgSrc} alt='profile_pic'/>
                    <input className='name' type='text' defaultValue={name} autoFocus/>
                    <input className='currentPosition' type='text' defaultValue={currentPosition}/>
                    <textarea defaultValue={descHeader}></textarea>
                </div>
            )
        }
        
        return(
            <header id='headInfo'>{toRender}</header>
        );
    }

}