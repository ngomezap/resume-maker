import React from "react";
import '../styles/Experience.css';



export class Experience extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            position: 'Solar technician',
            company: 'Ingeteam UK ltd.',
            initialDate: 'January 2020',
            endDate: 'August 2020',
            description: 'Only engineer in charge of tow solar farms of 5MW and 10MW',
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
        const position = e.target.parentNode.querySelector('.inputExpPos').value;
        const company = e.target.parentNode.querySelector('.inputExpCom').value;
        const initialDate = e.target.parentNode.querySelector('.expDateIpt').querySelector(".inputExpIniDate").value;
        const endDate = e.target.parentNode.querySelector('.expDateIpt').querySelector(".inputExpEndDate").value;
        const description = e.target.parentNode.querySelector('.inputExpDesc').value;

        this.setState({
            position: position,
            company: company,
            initialDate: initialDate,
            endDate: endDate,
            description: description,
            editMode: 'off'
        });
    }


    render(){

        const {position, company, initialDate, endDate, description} = this.state;

        const toRender = [];
        if(this.state.editMode === 'off'){
            toRender.push(
                <div>
                    <button id='editExpBtn' onClick={this.onEditButton}>Edit</button>
                    <h1>Experience</h1>
                    <h3 className="expPos">{position}</h3>
                    <h5 className="expCom">{company}</h5>
                    <h5 className="expDate">{initialDate} - {endDate}</h5>
                    <p className="expDesc">{description}</p>
                </div>
            )
        }else{
            toRender.push(
                <div>
                    <button id='submitExpBtn' type='submit' onClick={this.onSubmitButton}>Submit</button>
                    <h1>Experience</h1>
                    <input className='inputExpPos' type='text' defaultValue={position}/>
                    <input className='inputExpCom' type='text' defaultValue={company}/>
                    <div class="expDateIpt">
                        <input className='inputExpIniDate' type='month' defaultValue={initialDate}/>
                        <input className='inputExpEndDate' type='month' defaultValue={endDate}/>
                    </div>
                    <textarea className='inputExpDesc' defaultValue={description}/>                        
                </div>
            )
        }
        
        return(
            <section id='experience'>{toRender}</section>
        );
    }
}