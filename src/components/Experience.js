import React from "react";

export class Experience extends React.Component{

    render(){

        const {position, company, initialDate, endDate, description} = this.props.info;
        return(
            <section id="experience">
                <h1>Experience</h1>
                <h3>{position}</h3>
                <h5>{company}</h5>
                <h5>{initialDate} - {endDate}</h5>
                <p>{description}</p>
            </section>
        )
    }
}