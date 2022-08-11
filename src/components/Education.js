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
        const degree = e.target.parentNode.querySelector('.inputDegree').value;
        const university = e.target.parentNode.querySelector('.inputUniversity').value;
        const location = e.target.parentNode.querySelector('.inputLocation').value;
        const endDate = e.target.parentNode.querySelector('.inputEndDate').value;

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
                    <button id='editEduBtn' onClick={this.onEditButton}>Edit</button>
                    <h1>Education</h1>
                    <h3 className="headerDegree">{degree}</h3>
                    <h5 className="headerUni">{university}</h5>
                    <h5 className="headerLocal">{location}</h5>
                    <h5 className="headerEndDate">{endDate}</h5>
                </div>
            )
        }else{
            toRender.push(
                <div>
                    <button id='submitEduBtn' type='submit' onClick={this.onSubmitButton}>Submit</button>
                    <h1>Education</h1>
                    <input className="inputDegree" type='text' defaultValue={degree}/>
                    <input className='inputUniversity' type='text' defaultValue={university}/>
                    <input className='inputLocation' type='text' defaultValue={location}/>
                    <input className='inputEndDate' type='text' defaultValue={endDate}/>
                </div>
            )
        }
        
        return(
            <section id='education'>{toRender}</section>
        );
    }
}