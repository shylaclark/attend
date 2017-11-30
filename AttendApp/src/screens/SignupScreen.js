import React, { Component } from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Picker,
    TouchableWithoutFeedback
} from 'react-native'

import ModalDropdown from 'react-native-modal-dropdown';

const background = require("../img/background.png");
const backIcon = require("../img/back.png");
const personIcon = require("../img/person.png");
const lockIcon = require("../img/lock.png");
const emailIcon = require("../img/email.png");
const wifiIcon = require("../img/mac_address.png");

const Realm = require('realm');
const UserService =  require("../components/UserService.js");

export default class SignupScreen extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        macAddress: '',
        confirmPassword: ''
    }

    updateFormField = fieldName => text => {
        this.setState({ [fieldName]: text })
    }

    createAccount = (navigate) => {
        const userSignUp = this.state

				let existingUser = UserService.findAll().some(function(user) {
						return user.email === userSignUp.email;
				});

				if (existingUser) {
					alert("This email has been used already. Please enter a different email address.");
				} else {
          
          UserService.save(userSignUp);
					navigate('Login');
				}
    };

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <Image
                    source={background}
                    style={[styles.container, styles.bg]}
                    resizeMode="cover"
                >
                    <View style={styles.headerContainer}>
                        <View style={styles.headerTitleView}>
                            <Text style={styles.titleViewText}>Sign Up</Text>
                        </View>
                    </View>

                    <View style={styles.inputsContainer}>
                        <View style={styles.inputContainer}>
                            <View style={styles.iconContainer}>
                                <Image
                                    source={personIcon}
                                    style={styles.inputIcon}
                                    resizeMode="contain"
                                />
                            </View>
                            <TextInput
                                onChangeText={this.updateFormField('firstName')}
                                style={[styles.input, styles.whiteFont]}
                                placeholder="First Name"
                                placeholderTextColor="#FFF"
                                underlineColorAndroid='transparent'
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <View style={styles.iconContainer}>
                                <Image source={personIcon}
                                    style={styles.inputIcon}
                                    resizeMode="contain"
                                />
                            </View>
                            <TextInput
                                onChangeText={this.updateFormField('lastName')}
                                style={[styles.input, styles.whiteFont]}
                                placeholder="Last Name"
                                placeholderTextColor="#FFF"
                                underlineColorAndroid='transparent'
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <View style={styles.iconContainer}>
                                <Image
                                    source={personIcon}
                                    style={styles.inputIcon}
                                    resizeMode="contain"
                                />
                            </View>
                            <ModalDropdown
                              style={[{
                                backgroundColor:'transparent',
                                justifyContent: 'center'
                              }]}
                              textStyle={[{color:'white', paddingHorizontal: 10, fontSize: 16}]}
                              dropdownStyle={[{
                                paddingTop: 5,
                                backgroundColor: 'transparent',
                                borderBottomColor: '#CCC',
                                borderColor: '#000',
                                width: 200,
                              }]}
                              dropdownTextHighlightStyle={{fontWeight: 'bold'}}
                              dropdownTextStyle={[{color: 'black', justifyContent: 'center', fontSize: 15}]}
                              options={['Instructor', 'Student']}
                              defaultValue={'Role'}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <View style={styles.iconContainer}>
                                <Image
                                    source={emailIcon}
                                    style={styles.inputIcon}
                                    resizeMode="contain"
                                />
                            </View>
                            <TextInput
                                onChangeText={this.updateFormField('email')}
                                style={[styles.input, styles.whiteFont]}
                                placeholder="UNO Email"
                                placeholderTextColor="#FFF"
                            />
                            </View>

                            <View style={styles.inputContainer}>
                                <View style={styles.iconContainer}>
                                    <Image
                                        source={wifiIcon}
                                        style={styles.inputIcon}
                                        resizeMode="contain"
                                    />
                                </View>
                                <TextInput
                                    onChangeText={this.updateFormField('macAddress')}
                                    style={[styles.input, styles.whiteFont]}
                                    placeholder="Mac Address"
                                    placeholderTextColor="#FFF"
                                />
                        </View>

                        <View style={styles.inputContainer}>
                            <View style={styles.iconContainer}>
                                <Image
                                    source={lockIcon}
                                    style={styles.inputIcon}
                                    resizeMode="contain"
                                />
                            </View>
                            <TextInput
                                onChangeText={this.updateFormField('password')}
                                secureTextEntry={true}
                                style={[styles.input, styles.whiteFont]}
                                placeholder="Password"
                                placeholderTextColor="#FFF"
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <View style={styles.iconContainer}>
                                <Image
                                    source={lockIcon}
                                    style={styles.inputIcon}
                                    resizeMode="contain"
                                />
                            </View>
                            <TextInput
                                onChangeText={this.updateFormField('confirmPassword')}
                                secureTextEntry={true}
                                style={[styles.input, styles.whiteFont]}
                                placeholder="Confirm"
                                placeholderTextColor="#FFF"
                            />
                        </View>

                    </View>

                    <View style={styles.footerContainer}>

                        <TouchableOpacity onPress={ () => {this.createAccount(navigate);} }>
                            <View style={styles.signup}>
                                <Text style={styles.blackFont}>Sign Up</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.login}>
                                <Text style={styles.greyFont}>Already have an account?<Text style={styles.whiteFont} onPress={ ()=> navigate('Login') }> Log In</Text></Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Image>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bg: {
        paddingTop: 30,
        width: null,
        height: null
    },
    headerContainer: {
        flex: 1,
    },
    inputsContainer: {
        flex: 3,
        marginTop: 10,
    },
    footerContainer: {
        flex: 1
    },
    headerIconView: {
        marginLeft: 10,
        backgroundColor: 'transparent'
    },
    headerBackButtonView: {
        width: 20,
        height: 20,
    },
    backButtonIcon: {
        width: 25,
        height: 25,
    },
    headerTitleView: {
        backgroundColor: 'transparent',
        marginLeft: 20,
    },
    titleViewText: {
        fontSize: 40,
        color: '#fff',
    },
    inputs: {
        paddingVertical: 20,
    },
    inputContainer: {
        borderWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#CCC',
        borderColor: 'transparent',
        flexDirection: 'row',
        height: 50,
    },
    iconContainer: {
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputIcon: {
        width: 20,
        height: 20,
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
    },
    signup: {
        backgroundColor: '#FFF',
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    login: {
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
    },
    button: {
        flexDirection: 'column',
        backgroundColor: "transparent",
        borderColor: "#8E8E8E",
        borderWidth: StyleSheet.hairlineWidth,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        bottom: 0
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
    },

});
