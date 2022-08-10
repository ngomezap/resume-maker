import React from "react";

export class Experience extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            position: 'Solar technician',
            company: 'Ingeteam UK ltd.',
            initialDate: 'January 2020',
            endDate: 'August 2020',
            description: 'Only engineer in charge of tow solar farms of 5MW and 10MW'
        }
    }


    render(){

        const {position, company, initialDate, endDate, description} = this.state;
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