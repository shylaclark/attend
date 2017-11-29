import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TextInput,
    TouchableOpacity
} from 'react-native';

const { width, height } = Dimensions.get("window");

const background = require("../img/background.png");
const logo = require("../img/logo.png");
const lockIcon = require("../img/lock.png");
const personIcon = require("../img/person.png");

const Realm = require('realm');
const UserService = require('../components/UserService.js');

export default class LoginScreen extends Component {

    state = {
        username: '',
        password: ''
    }

    updateFormField = fieldName => text => {
        this.setState({ [fieldName]: text })
    }

    authenticate = (navigate) => {
        const { username, password } = this.state

        let validUser = UserService.findAll().some(function(user) {
            return user.email === username && user.password === password;
        });
				if (validUser) {
					navigate('CourseList');
				}
        console.log('is valid user', validUser);
    };

    render() {

        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
              <Image source={background} style={styles.background} resizeMode="cover">
                <View style={styles.logoWrap}>
                  <Image source={logo} style={styles.logo} resizeMode="contain" />
                </View>
                <View style={styles.wrapper}>
                  <View style={styles.inputWrap}>
                    <View style={styles.iconWrap}>
                      <Image source={personIcon} style={styles.icon} resizeMode="contain" />
                    </View>
                    <TextInput
                        onChangeText={this.updateFormField('username')}
                        placeholder="Username"
                        placeholderTextColor="#FFF"
                        style={styles.input}
                    />
                  </View>
                  <View style={styles.inputWrap}>
                    <View style={styles.iconWrap}>
                      <Image source={lockIcon} style={styles.icon} resizeMode="contain" />
                    </View>
                    <TextInput
                        onChangeText={this.updateFormField('password')}
                        placeholderTextColor="#FFF"
                        placeholder="Password"
                        style={styles.input}
                        secureTextEntry
                    />
                  </View>
                  <TouchableOpacity activeOpacity={.5} onPress={ () => this.authenticate(navigate) }>
                    <View style={styles.button}>
                      <Text style={styles.buttonText}>Log In</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.container}>
                  <View style={styles.signupWrap}>

                    <TouchableOpacity activeOpacity={.5}>
                      <View style={styles.signup}>
                          <Text style={styles.whiteFont} onPress={ ()=> navigate('Signup') }> Sign Up for AttendApp</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    logoWrap: {
        flex: 1,
        paddingVertical: 30,
    },
    logo: {
        width: null,
        height: null,
        flex: 1,
    },
    background: {
        width,
        height,
    },
    wrapper: {
        paddingVertical: 30,
    },
    inputWrap: {
        flexDirection: "row",
        marginVertical: 10,
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: "#CCC"
    },
    iconWrap: {
        paddingHorizontal: 7,
        alignItems: "center",
        justifyContent: "center",
    },
    icon: {
        height: 20,
        width: 20,
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
        color: "#FFF",

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
    forgotPasswordText: {
        color: "#D8D8D8",
        backgroundColor: "transparent",
        textAlign: "right",
        paddingRight: 15,
    },
    signupWrap: {
        backgroundColor: "transparent",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    accountText: {
        color: "#D8D8D8"
    },
    signup: {
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
