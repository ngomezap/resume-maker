import React from "react";

export class Education extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            degree: 'Industrial Engineering',
            university: 'University of Cantabria',
            location: 'Santander',
            endDate: 'July 2018',
            editMode: 'off'
        }
    }

    render(){
        const {degree, university, location, endDate} = this.state;
        return(
            <section id="education">
                <h1>Education</h1>
                <h3>{degree}</h3>
                <h5>{university}</h5>
                <h5>{location}</h5>
                <h5>{endDate}</h5>
            </section>
        )
    }
}