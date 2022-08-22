import React from "react";
import { Experience } from "./Experience";


export class ExperienceList extends React.Component{

    constructor(props){
        super(props);
        this.onEditButton = this.onEditButton.bind(this);
        this.onSubmitButton = this.onSubmitButton.bind(this);
        this.onAddButton = this.onAddButton.bind(this);
        this.onDeleteButton = this.onDeleteButton.bind(this);
    }

    onEditButton(e){
        this.props.onEditButton(e);
    }

    onSubmitButton(e){
        this.props.onSubmitButton(e);
    }

    onAddButton(e){
        this.props.onAddButton(e);
    }

    onDeleteButton(e){
        this.props.onDeleteButton(e);
    }

    render(){
        const experience = this.props.info;
        const keys = Object.keys(experience);
        let toRender = [];
        toRender.push(
            <h1>Experience</h1>
        )
        keys.forEach(k => {
            toRender.push(
                <Experience 
                    info={experience[k]} 
                    onEditButton = {this.onEditButton} 
                    onSubmitButton = {this.onSubmitButton}
                    onDeleteBtn = {this.onDeleteButton}>
                </Experience>
            );
        });
        toRender.push(
            <button onClick={this.onAddButton}>Add</button>
        )
        return(
            <section id="experience">{toRender}</section>
        )
    }

}