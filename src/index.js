import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const headInfo = {
  name: 'Ignacio Gomez Aparicio',
  position: 'Software Engineer'
}

const sideInfo = {
  mail: 'igomez.ap@gmail.com',
  phone: '0034 671197504',
  linkedin: 'linkedin.com/in/ignacio-gomez-aparicio/'
}

const education = {
  degree: 'Industrial Engineering',
  university: 'University of Cantabria',
  location: 'Santander',
  endDate: 'July 2018'
}

const experience = {
  position: 'Solar Technician',
  company: 'Ingeteam UK ltd.',
  initialDate: 'January 2022',
  endDate: 'August 2022',
  description: 'Only engineer in charge of tow solar farms of 5MW and 10MW'
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App 
    headInfo = {headInfo}
    sideInfo = {sideInfo}
    education = {education}
    experience = {experience}/>
  </React.StrictMode>
);

