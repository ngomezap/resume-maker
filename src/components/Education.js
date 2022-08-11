import React from "react";
import '../styles/Education.css'

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
        this.onEditButton = this.onEditButton.bind(this);
        this.onSubmitButton = this.onSubmitButton.bind(this);
    }

    onEditButton(){
        this.setState({
            editMode: 'on'
        });
    }

    onSubmitButton(e){
        e.preventDefault();
        const degree = e.target.parentNode.querySelector('#inputDegree').value;
        const university = e.target.parentNode.querySelector('#inputUniversity').value;
        const location = e.target.parentNode.querySelector('#inputLocation').value;
        const endDate = e.target.parentNode.querySelector('#inputEndDate').value;

        this.setState({
            degree: degree,
            university: university,
            location: location,
            endDate: endDate,
            editMode: 'off'
        });
    }


    render(){
        const {degree, university, location, endDate} = this.state;
        const toRender = [];
        if(this.state.editMode === 'off'){
            toRender.push(
                <div>
                    <h1>Education</h1>
                    <h3>{degree}</h3>
                    <h5>{university}</h5>
                    <h5>{location}</h5>
                    <h5>{endDate}</h5>
                    <button id='editEduBtn' onClick={this.onEditButton}>Edit</button>
                </div>
            )
        }else{
            toRender.push(
                <div>
                    <form>
                        <input id='inputDegree' type='text' defaultValue={degree}/>
                        <input id='inputUniversity' type='text' defaultValue={university}/>
                        <input id='inputLocation' type='text' defaultValue={location}/>
                        <input id='inputEndDate' type='text' defaultValue={endDate}/>
                        
                        <button id='submitEduBtn' type='submit' onClick={this.onSubmitButton}>Submit</button>
                    </form>
                </div>
            )
        }
        
        return(
            <section id='education'>{toRender}</section>
        );
    }
}