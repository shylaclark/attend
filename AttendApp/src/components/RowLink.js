import React, {Component} from 'react';
import {AppRegistry, Button, Text, View, Image, ListView, StyleSheet, TouchableOpacity} from 'react-native';

//export default
class RowLink extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            navigation: this.props.navigation
        };
    }
    componentWillReceiveProps(props){
        this.setState({
            data:props.data,
            navigation: props.navigation
        });
    }
    render() {
        return (

            //<View>
            //    <TouchableOpacity activeOpacity={.5} onPress={ ()=> navigate('AttendanceSheet') }>
            //        <View style={styles.inputContainer}>
            //            <Text style={styles.whiteFont}>{this.props.title}</Text>
            //        </View>
            //    </TouchableOpacity>
            //</View>


            <Button
                title={' '}
                style={styles.inputContainer}
                size={20}
                iconStyle={{marginLeft: -10, marginRight: 0}}
                activeOpacity={.5}
                //borderRadius={5}
                onPress={ ()=> this.state.navigation.navagate('AttendanceSheet')}
            >
            </Button>
        );
    }
}
module.exports = RowLink;

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
