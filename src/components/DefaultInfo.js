
import avatar from '../images/avatar.png';

const defaultExp = {
    id: 'defaultExp',
    position: 'Job Position',
    company: 'Company',
    startDateJob: 'Starting Date (MM/YYYY)',
    endDateJob: 'End Date (MM/YYYY)',
    description: 'Position description and main responsabilities',
    editMode: 'off'
}

const defaultSide = {
    id: 'defaultSide',
    mail: 'email@gmail.com',
    phone: '0034 000000000',
    linkedin: 'linkedin.com/in/name-surname/',
    editMode: 'off'
}

const defaultHead = {
    id: 'defaultHead',
    imgSrc: avatar,
    name: 'Name Surname',
    currentPosition: 'Current Position',
    descHeader: 'I am a very active person alway looking forward to find new '+
    'challenges. Programming has become one of the things that I most enjoy and'+
    'I\'d be happy to make a career out of it.',
    editMode: 'off'
}

const defaultEdu = {
    degree: 'Industrial Engineering',
    university: 'University of Cantabria',
    location: 'Santander',
    endDate: 'July 2018',
    editMode: 'off',
    id: 'defaultEdu'
}

export {defaultEdu, defaultExp, defaultHead, defaultSide}
