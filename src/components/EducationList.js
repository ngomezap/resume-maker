import React from "react";
import { Education } from "./Education";


export class EducationList extends React.Component{

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
        const education = this.props.info;
        const keys = Object.keys(education);
        let toRender = [];
        toRender.push(
            <h1>Education</h1>
        )
        keys.forEach(k => {
            toRender.push(
                <Education 
                    info={education[k]} 
                    onEditButton = {this.onEditButton} 
                    onSubmitButton = {this.onSubmitButton}
                    onDeleteBtn = {this.onDeleteButton}>
                </Education>
            );
        });
        toRender.push(
            <button onClick={this.onAddButton}>Add</button>
        )
        return(
            <section id="education">{toRender}</section>
        )
    }

}