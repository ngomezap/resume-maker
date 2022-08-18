import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer, Image, Svg, Path } from '@react-pdf/renderer';
import source from '../fonts/Nunito-Light.ttf';
import { Font } from '@react-pdf/renderer';
import mailIcon from '../images/mail.png';
import phoneIcon from '../images/phone.png';
import linkedinIcon from '../images/linkedin.png'

Font.register({ family: 'Nunito', src: source, fontStyle: 'normal', fontWeight: 'normal'});
Font.registerHyphenationCallback(word => [word]);

// Create styles
const styles = StyleSheet.create({
    page: {
        backgroundColor: '#E4E4E4',
        flexDirection: 'row',
        flexWrap: 'wrap',
        fontFamily: 'Nunito'
    },
    header: {
        margin: 10,
        padding: 10,
        width: '100%',
        height: '20%',
        //backgroundColor: 'aquamarine',
        flexDirection: 'column',
        flexWrap: 'wrap'
    },
    leftSide: {
        paddingLeft: 20,
        height: '75%',
        width: '30%',
        //backgroundColor: 'cyan',
        fontSize: '14px',
        textOverflow: 'ellipsis'
    },
    rightSide: {
        paddingLeft: '20px',
        height: '75%',
        width: '70%'
    },
    education: {
        marginBottom: 20,
        fontSize: '15px'
        //backgroundColor: 'rgb(247, 167, 167)'
    },
    experience: {
        //backgroundColor: 'rgb(243, 242, 165)'
    },
    avatar: {
        height: '100%'
    },
    viewer: {
        width: window.innerWidth/1.3,
        height: window.innerHeight
    },
    eduSection: {
        marginBottom: '10px'
    },
    expSection: {
        marginBottom: '10px'
    },

    //Left Side

    icon: {
        width: '10%'
    },

    //Header section
    headerSection: {
        fontSize: '30px',
        marginBottom: '10px',
    },
    headerDesc: {
        fontSize: '13px',
        textAlign: 'justify',
        marginRight: '30%',
        marginLeft: '5%',
    },
    name:{
        marginLeft: '5%',
    },
    currentPosition:{
        marginLeft: '5%',
    }

  });

  // Create Document Component
export class MyDocument extends React.Component{



    render(){
        const {education, experience, sideInfo, headInfo} = this.props.info;

        const renderExp = [];
        const expKeys = Object.keys(experience);
        expKeys.forEach(k => {
            renderExp.push(
                <View>
                    <Text>{experience[k].position}</Text>
                    <Text>{experience[k].company}</Text>
                    <Text>{experience[k].startDateJob} - {experience[k].endDateJob}</Text>
                    <Text style={styles.expSection}>{experience[k].description}</Text>
                </View>
            )
        })

        const renderEdu = [];
        const eduKeys = Object.keys(education);
        eduKeys.forEach(k => {
            renderEdu.push(
                <View>
                    <Text>{education[k].degree}</Text>
                    <Text>{education[k].university}</Text>
                    <Text style={styles.eduSection}>{education[k].endDate}</Text>
                </View>
            )
        })


        return (
            <PDFViewer style={styles.viewer}>
                <Document>
                    <Page size="A4" style={styles.page}>
                        <View style={styles.header}>
                            <Image src={headInfo.defaultHead.imgSrc} style={styles.avatar}></Image>
                            <Text style={styles.name}>{headInfo.defaultHead.name}</Text>
                            <Text style={styles.currentPosition}>{headInfo.defaultHead.currentPosition}</Text>
                            <Text style={styles.headerDesc}>{headInfo.defaultHead.descHeader}</Text>
                        </View>
                        <View style={styles.leftSide}>
                            <Image style={styles.icon} src={mailIcon}></Image>
                            <Text>{sideInfo.defaultSide.mail}</Text>
                            <Image style={styles.icon} src={phoneIcon}></Image>
                            <Text>{sideInfo.defaultSide.phone}</Text>
                            <Image style={styles.icon} src={linkedinIcon}></Image>
                            <Text>{sideInfo.defaultSide.linkedin}</Text>
                            
                        </View>
                        <View style={styles.rightSide}>
                            <View style={styles.education}>
                                <Text style={styles.headerSection}>Education</Text>
                                {renderEdu}
                            </View>
                            <View style={styles.experience}>
                                <Text style={styles.headerSection}>Experience</Text>
                                {renderExp}
                            </View>
                        </View>
                    </Page>
                </Document>
            </PDFViewer>
        );
    }
} 
