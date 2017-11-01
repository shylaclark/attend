import React, {Component} from 'react';
import {AppRegistry, Text, View, Image, ListView, TouchableOpacity, StyleSheet} from 'react-native';

const courses = [
    {name: 'CSCI 5101- Programming Language Structure', instructor: 'Dr. ThisGuy'},
    {name: 'CSCI 6363- Agile Software Engineering', instructor: 'Dr. ThisGuy'},
    {name: 'CSCI 5501- Analysis of Algorithms', instructor: 'Dr. ThisGuy'},
    {name: 'CSCI 3301- Computer Orginization', instructor: 'Dr. ThisGuy'},
    {name: 'CSCI 2467- Systems Programming Concepts', instructor: 'Dr. ThisGuy'},
    {name: 'CSCI 5101- Programming Language Structure', instructor: 'Dr. ThisGuy'},
    {name: 'CSCI 6363- Agile Software Engineering', instructor: 'Dr. ThisGuy'},
    {name: 'CSCI 5501- Analysis of Algorithms', instructor: 'Dr. ThisGuy'},
    {name: 'CSCI 3301- Computer Orginization', instructor: 'Dr. ThisGuy'},
    {name: 'CSCI 2467- Systems Programming Concepts', instructor: 'Dr. ThisGuy'}
]
const background = require("../img/background.png");

export default class CourseList extends Component{
    constructor(){
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            courseDataSource: ds.cloneWithRows(courses),
        };
    }

    renderRow(course, sectionId, rowId, highlightRow){
        return(

            <View style={styles.row}>
                <Text style={styles.rowText}>{course.name}</Text>
                <Text style={styles.rowText}>{course.instructor}</Text>
            </View>
        )
    }

    render(){
        return(
            <View style={styles.container}>
                <Image
                    source={background}
                    style={[styles.container, styles.bg]}
                    resizeMode="cover"
                >
                    <View style={styles.headerContainer}>
                        <View style={styles.headerTitleView}>
                            <Text style={styles.titleViewText}>Courses</Text>
                        </View>
                    </View>

                    <View style={styles.inputsContainer}>
                        <ListView
                            enableEmptySections={false}
                            automaticallyAdjustContentInsets={false}
                            dataSource={this.state.courseDataSource}
                            renderRow={this.renderRow.bind(this)}
                        />
                    </View>
                    <View style={styles.footerContainer}>

                        <TouchableOpacity activeOpacity={.5}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText} onPress={ ()=> navigate('Create') }>Add Course</Text>
                            </View>
                        </TouchableOpacity>
                        
                    </View>
                </Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flex:1,
        justifyContent:'center',
        padding:10,
        backgroundColor: 'black',
        marginBottom:3
    },
    rowText: {
        flex:1,
        flexDirection: 'row',
        color: 'white'
    },
    container: {
    },
    bg: {
        paddingTop: 30,
        width: null,
        height: null
    },
    headerContainer: {
        flex: 3,
    },
    inputsContainer: {
        marginTop: 100,
    },
    footerContainer: {
        flex: 1
    },
    headerIconView: {
        marginLeft: 10,
        backgroundColor: 'transparent'
    },
    headerBackButtonView: {
        width: 20,
        height: 20,
    },
    backButtonIcon: {
        width: 25,
        height: 25,
    },
    headerTitleView: {
        backgroundColor: 'transparent',
        marginTop: 20,
        marginLeft: 20,
    },
    titleViewText: {
        fontSize: 40,
        color: '#fff',
    },
    dropdownText: {
        fontSize: 17,
        color: '#fff',
    },
    inputs: {
        paddingVertical: 20,
    },
    inputContainer: {
        borderWidth: 1,
        borderBottomColor: '#CCC',
        borderColor: 'transparent',
        flexDirection: 'row',
        height: 50,
    },

    iconContainer: {
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputIcon: {
        width: 20,
        height: 20,
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
    },
    signup: {
        backgroundColor: '#FFF',
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    login: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    greyFont: {
        color: '#D8D8D8'
    },
    blackFont: {
        color: '#000'
    },
    whiteFont: {
        color: '#FFF'
    }
});


AppRegistry.registerComponent('CourseList', () => CourseList);

