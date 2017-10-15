/*
 * App.js container component
 */

import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import SignupScreen from "./screens/SignupScreen";
import LoginScreen from "./screens/LoginScreen";

const AttendApp = StackNavigator({
    Login: {screen: LoginScreen},
    Signup: {screen: SignupScreen},
});


export default class App extends Component {
    render(){
        return <AttendApp />;
    }
}