import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native'
import CourseCreator from '../components/CourseCreator';
const background = require("../img/background.png");

const Realm = require('realm');
const CourseService = require('../components/CourseService.js');

export default class CreateCourse extends Component {

    state = {
        courseName: ' ',
        courseDescription: ' '
    };

    updateFormField = fieldName => text => {
        this.setState({ [fieldName]: text })
    };

    createAccount = (navigate) => {
      const course = this.state;

      CourseService.save(course);
      navigate('CourseList');
    };


    render() {
        const {navigate} = this.props.navigation;
        return (
            <Image source={background} style={styles.background} resizeMode="cover">

                <View style={styles.container}>
                    <CourseCreator navigation = {this.props.navigation}></CourseCreator>
                </View>
            </Image>

        )
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        marginRight: 10,
        marginLeft:10
    },
    bg: {
        paddingTop: 30,
        width: null,
        height: null
    },
    background: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',           // Center vertically
        alignItems: 'center',
    },
    headerContainer: {
        flex: 1,
    },
    inputsContainer: {
        flex: 3,
        marginTop: 50,
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
    createcourse: {
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
