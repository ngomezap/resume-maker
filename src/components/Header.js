import React from "react";


export class Header extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            imgSrc: '#',
            name: 'Ignacio Gómez Aparicio',
            position: 'Software Developer'
        }
    };

    render(){
        const {imgSrc, name, position} = this.state;
        return(
            <header id="headInfo">
                <img src={imgSrc} alt='profile_pic'/>
                <h1>{name}</h1>
                <h4>{position}</h4>
            </header>
        );
    }

}