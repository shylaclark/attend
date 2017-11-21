import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Splash extends Component {
    render(){
        return <View style={styles.wrapper}>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>
                    Automated Attendance Recording System
                </Text>
            </View>
            <View>
            <Text style={styles.subtitle}>
                Powered by React Native
            </Text>
            </View>
        </View>
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor:'black',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    titleWrapper:{
      justifyContent:'center',
      alignItems:'center',
      flex:1
    },
    title: {
        color:'white',
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center'
    },
    subtitle: {
        color: 'white',
        fontWeight:'200',
        paddingBottom:20
    }
});