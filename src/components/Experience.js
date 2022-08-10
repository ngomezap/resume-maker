import React from "react";

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
        const position = e.target.parentNode.querySelector('#inputPosition').value;
        const company = e.target.parentNode.querySelector('#inputCompany').value;
        const initialDate = e.target.parentNode.querySelector('#inputIniDate').value;
        const endDate = e.target.parentNode.querySelector('#inputEndDate').value;
        const description = e.target.parentNode.querySelector('#inputDescription').value;

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
                    <h1>Experience</h1>
                    <h3>{position}</h3>
                    <h5>{company}</h5>
                    <h5>{initialDate} - {endDate}</h5>
                    <p>{description}</p>
                    <button id='editExpBtn' onClick={this.onEditButton}>Edit</button>
                </div>
            )
        }else{
            toRender.push(
                <div>
                    <form>
                        <input id='inputPosition' type='text' defaultValue={position}/>
                        <input id='inputCompany' type='text' defaultValue={company}/>
                        <input id='inputIniDate' type='text' defaultValue={initialDate}/>
                        <input id='inputEndDate' type='text' defaultValue={endDate}/>
                        <input id='inputDescription' type='text' defaultValue={description}/>
                        
                        <button id='submitExpBtn' type='submit' onClick={this.onSubmitButton}>Submit</button>
                    </form>
                </div>
            )
        }
        
        return(
            <section id='experience'>{toRender}</section>
        );
    }
}