import React from "react";
import '../styles/Header.css';
import { FaUserEdit } from "react-icons/fa";

export class Header extends React.Component{

    constructor(props){
        super(props);
        this.onEditButton = this.onEditButton.bind(this);
        this.onSubmitButton = this.onSubmitButton.bind(this);
        this.onUpdatePhoto = this.onUpdatePhoto.bind(this);
    };

    onUpdatePhoto(e){
        this.props.onUpdatePhoto(e);
    }

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
                    <textarea className='descInput' defaultValue={descHeader}></textarea>
                    <label className='updateBtn'>
                        <input type="file"  onChange={this.onUpdatePhoto}></input>
                        <FaUserEdit style={{width: '30%'}}></FaUserEdit>
                        Update Pic
                    </label>
                    
                </div>
            )
        }
        
        return(
            <header id='headInfo'>{toRender}</header>
        );
    }

}