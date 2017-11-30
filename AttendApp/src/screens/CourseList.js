import React, {Component} from 'react';

import {AppRegistry, Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import AttendanceSheet from "./AttendanceSheet";
//import CreateCourse from "./CreateCourse";
//import Header from "../components/Header";
//import ListFooter from "../components/ListFooter";
//import SectionHeader from "../components/SectionHeader";
import ListView from '../components/ListView';
//import { ListView } from 'realm/react-native';

const background = require("../img/background.png");

export default class CourseList extends Component{

    render(){
        const { navigate } = this.props.navigation;
        return(
            <Image source={background} style={styles.background} resizeMode="cover">

                <View style={styles.container}>
                    <ListView navigation = {this.props.navigation}></ListView>
                </View>
            </Image>
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
    separator: {

        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 0,
        paddingBottom: 10,
        paddingLeft: 2,
        paddingRight: 2,
        backgroundColor: 'transparent',
    },
    bg: {
        paddingTop: 30,
        width: null,
        height: null,
    },
    background: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',           // Center vertically
        alignItems: 'center',
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
    button: {
        backgroundColor: "#FFF",
        paddingVertical: 20,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
    },
    buttonText: {
        color: "#000",
        fontSize: 18,
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




//AppRegistry.registerComponent('CourseList', () => CourseList);
