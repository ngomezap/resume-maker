import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer, Image } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: {
        backgroundColor: '#E4E4E4',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    header: {
        margin: 10,
        padding: 10,
        width: '100%',
        height: '20%',
        backgroundColor: 'aquamarine',
        flexDirection: 'column',
        flexWrap: 'wrap'
    },
    leftSide: {
        paddingLeft: 20,
        height: '75%',
        width: '30%',
        backgroundColor: 'cyan',
        fontSize: '14px'
    },
    rightSide: {
        paddingLeft: '20px',
        height: '75%',
        width: '70%'
    },
    education: {
        marginBottom: 20,
        backgroundColor: 'rgb(247, 167, 167)'
    },
    experience: {
        backgroundColor: 'rgb(243, 242, 165)'
    },
    avatar: {
        height: '100%'
    },
    viewer: {
        width: window.innerWidth/2,
        height: window.innerHeight
    }
  });

  // Create Document Component
export class MyDocument extends React.Component{



    render(){
        const {education, experience, sideInfo, headInfo} = this.props.info;

        return (
            <PDFViewer style={styles.viewer}>
                <Document>
                    <Page size="A4" style={styles.page}>
                        <View style={styles.header}>
                            <Image src={headInfo.imgSrc} style={styles.avatar}></Image>
                            <View>
                                <Text>{headInfo.name}</Text>
                            </View>
                            <View>
                                <Text>{headInfo.currentPosition}</Text>
                            </View>
                        </View>
                        <View style={styles.leftSide}>
                            <Text>{sideInfo.mail}</Text>
                            <Text>{sideInfo.phone}</Text>
                            <Text>{sideInfo.linkedin}</Text>
                        </View>
                        <View style={styles.rightSide}>
                            <View style={styles.education}>
                                <Text>Education</Text>
                                <Text>{education.degree}</Text>
                                <Text>{education.university}</Text>
                                <Text>{education.endDate}</Text>
                            </View>
                            <View style={styles.experience}>
                                <Text>Experience</Text>
                                
                            </View>
                        </View>
                    </Page>
                </Document>
            </PDFViewer>
        );
    }
} 
