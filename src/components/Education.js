import React from "react";

export class Education extends React.Component{

    render(){
        const {degree, university, location, endDate} = this.props.info;
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