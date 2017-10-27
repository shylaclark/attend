/*
 * App.js container component
 */

import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import SignupScreen from "./screens/SignupScreen";
import LoginScreen from "./screens/LoginScreen";
import CreateCourse from "./screens/CourseScreen";

const AttendApp = StackNavigator({
    Login: {screen: LoginScreen},
    Signup: {screen: SignupScreen},
    Create: {screen: CreateCourse}
});


export default class App extends Component {
    render(){
        return <AttendApp />;
    }
}