import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import App from './src/App.js';

/*
 * AppRegistry defines the entry point to the application and provides the root component.
 */
AppRegistry.registerComponent('AttendApp', () => App);