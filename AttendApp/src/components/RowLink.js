import React, {Component} from 'react';
import {AppRegistry, Button, Text, View, Image, ListView, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from  'react-native-vector-icons/MaterialIcons';

//export default
class RowLink extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
        };
    }
    componentWillRecieveProps(props){
        this.setState({
            data:props.data
        });
    }
    render() {
        const { navigate } = this.props.navigation;
        let iconName = this.state.data.active ? 'check-box' : 'check-box-outline-blank';
        let color = this.props.color || "#0000";

        return (

            /*<View>
            //    <TouchableOpacity activeOpacity={.5} onPress={ ()=> navigate('AttendanceSheet') }>
            //        <View style={styles.inputContainer}>
            //            <Text style={styles.whiteFont}>{this.props.title}</Text>
            //        </View>
            //    </TouchableOpacity>
            </View>
            */

            <Icon.Button
                data={this.state.data}
                name={iconName}
                backgroundColor='rgba(0,0,0,0)'
                color={color}
                underlayColor='rgba(0,0,0,0)'
                size={20}
                iconStyle={{marginLeft: -10, marginRight: 0}}
                activeOpacity={1}
                borderRadius={5}
                onPress={this.props.onCheckBoxPressed}
            >
            </Icon.Button>
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
