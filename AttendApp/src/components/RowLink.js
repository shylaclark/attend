import React, {Component} from 'react';
import {AppRegistry, Button, Text, View, Image, ListView, StyleSheet, TouchableOpacity} from 'react-native';
import AttendanceSheet from "../screens/AttendanceSheet";

export default class RowLink extends Component {

    constructor(props) {
        super(props);
    }

    render({onPress} = this.props) {
        const { navigate } = this.props.navigation;
        return (

            <View>

                <TouchableOpacity activeOpacity={.5} onPress={ ()=> navigate('AttendanceSheet') }>
                    <View style={styles.inputContainer}>
                        <Text style={styles.whiteFont}>{this.props.title}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
let styles = StyleSheet.create({

    inputContainer: {
        flexDirection: 'row',
        height: 50,
        backgroundColor: "black",
        alignItems: 'center',
        alignContent: 'center',
        paddingLeft: 10,


    },
    greyFont: {
        color: '#D8D8D8'
    },
    blackFont: {
        color: '#000'
    },
    whiteFont: {
        color: '#FFF',
        fontSize: 17
    }
});
