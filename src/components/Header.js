import React from "react";


export class Header extends React.Component{

    constructor(props){
        super(props);
    };

    render(){
        return(
            <header id="headInfo">
                <img src='#' alt='profile_pic'/>
                <h1>{this.props.info.name}</h1>
                <h4>{this.props.info.position}</h4>
            </header>
        );
    }

}