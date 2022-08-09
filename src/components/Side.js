import React from "react";

export class Side extends React.Component{

    render(){
        return(
            <section id="sideInfo">
                <h6>Email: {this.props.info.mail}</h6>
                <h6>Tel: {this.props.info.phone}</h6>
                <h6>LinkedIn: {this.props.info.linkedin}</h6>
            </section>
        )
    }
}