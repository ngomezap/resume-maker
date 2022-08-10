import React from "react";


export class Header extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            imgSrc: '#',
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
                    <img src={imgSrc} alt='profile_pic'/>
                    <h1>{name}</h1>
                    <h4>{position}</h4>
                    <button id='editHeadBtn' onClick={this.onEditButton}>Edit</button>
                </div>
            )
        }else{
            toRender.push(
                <div>
                    <img src={imgSrc} alt='profile_pic'/>
                    <form>
                        <input id='inputName' type='text' defaultValue={name}/>
                        <input id='inputPosition' type='text' defaultValue={position}/>
                        <button id='submitHeadBtn' type='submit' onClick={this.onSubmitButton}>Submit</button>
                    </form>
                </div>
            )
        }
        
        return(
            <header id='headInfo'>{toRender}</header>
        );
    }

}