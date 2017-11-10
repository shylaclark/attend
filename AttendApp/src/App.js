/*
 * App.js container component
 */

import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import SignupScreen from "./screens/SignupScreen";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";

const AttendApp = StackNavigator({
    Login: {screen: LoginScreen},
    Signup: {screen: SignupScreen},
    Home: {screen: HomeScreen},

});


export default class App extends Component {
    render(){
        return <AttendApp />;
    }
}
