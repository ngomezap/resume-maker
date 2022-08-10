import React from "react";

export class Side extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            mail: 'igomez.ap@gmail.com',
            phone: '0034 671197504',
            linkedin: 'linkedin.com/in/ignacio-gomez-aparicio/',
            editMode: 'off'
        }
    }

    render(){
        const {mail, phone, linkedin} = this.state;
        return(
            <section id="sideInfo">
                <h6>Email: {mail}</h6>
                <h6>Tel: {phone}</h6>
                <h6>LinkedIn: {linkedin}</h6>
            </section>
        )
    }
}