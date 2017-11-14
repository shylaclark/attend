/*
 * App.js container component
 */

import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import SignupScreen from "./screens/SignupScreen";
import LoginScreen from "./screens/LoginScreen";
import CourseList from "./screens/CourseList";
import AttendanceSheet from "./screens/AttendanceSheet";
import HomeScreen from "./screens/HomeScreen";


const AttendApp = StackNavigator({
    Login: {screen: LoginScreen},
    Signup: {screen: SignupScreen},
    CourseList: {screen: CourseList},
    AttendanceSheet: {screen: AttendanceSheet},
    Home: {screen: HomeScreen},
    CreateCourse: {screen: CreateCourse}
});


export default class App extends Component {
    render(){
        return <AttendApp />;
    }
}
