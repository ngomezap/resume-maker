import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, Image, Svg, Line } from '@react-pdf/renderer';
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
        backgroundColor: '#EFEFEF',
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
        fontSize: '12px'
        //backgroundColor: 'rgb(247, 167, 167)'
    },
    experience: {
        marginBottom: 20,
        fontSize: '12px'
        //backgroundColor: 'rgb(243, 242, 165)'
    },
    avatar: {
        height: '100%',
        borderRadius: '50%'
    },
    viewer: {
        width: window.innerWidth/1.3,
        height: window.innerHeight
    },
    
    expSection: {
        marginBottom: '10px'
    },

    //Left Side

    icon: {
        width: '10%',
        marginBottom: '2px',
        marginTop: '4px'
    },

    //Experience section
    dateExp: {
        fontSize: '10px'
    },


    //Education section
    eduSection: {
        marginBottom: '10px',
    },

    dateEdu:{
        fontSize: '10px'
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
    },
    downloadBtn: {
        backgroundColor: 'rgb(89, 185, 94)',
        width: '15%',
        textAlign: 'center',
        marginBottom: '10px',
        border: 'black solid 1px'
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
                    <Text style={styles.dateExp}>{experience[k].startDateJob} - {experience[k].endDateJob}</Text>
                    <Text style={styles.expSection}>{experience[k].description}</Text>
                </View>
            )
        })

        const renderEdu = [];
        const eduKeys = Object.keys(education);
        eduKeys.forEach(k => {
            renderEdu.push(
                <View style={styles.eduSection}>
                    <Text>{education[k].degree}</Text>
                    <Text>{education[k].university}</Text>
                    <Text style={[styles.dateEdu]}>{education[k].endDate}</Text>
                </View>
            )
        })


        const MyDoc = () => (
            <Document>
                <Page wrap={false} size="A4" style={styles.page} >
                    <View style={styles.header}>
                        <Image src={headInfo.defaultHead.imgSrc} style={styles.avatar}></Image>
                        <Text style={styles.name}>{headInfo.defaultHead.name}</Text>
                        <Text style={styles.currentPosition}>{headInfo.defaultHead.currentPosition}</Text>
                        <Text style={styles.headerDesc}>{headInfo.defaultHead.descHeader}</Text>
                        <Svg height="3" width="600" style={{marginTop: '20px'}}>
                            <Line x1="40" y1="0" x2="350" y2="0" strokeWidth={2} stroke="rgb(0,0,0)"/>
                        </Svg>
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
                            <Text style={{fontSize: '22px'}}>Education</Text>
                            {renderEdu}
                        </View>
                        <View style={styles.experience}>
                            <Text style={{fontSize: '22px'}}>Experience</Text>
                            {renderExp}
                        </View>
                    </View>
                </Page>
            </Document>
        )

        return (
            <div style={styles.downloadBtn}>
                <PDFDownloadLink document={<MyDoc />} fileName="resume.pdf">
                    {({ blob, url, loading, error }) =>
                        loading ? 'Loading document...' : 'Download now!'
                    }
                </PDFDownloadLink>
            </div>
        );
    }
} 
