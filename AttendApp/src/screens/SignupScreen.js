import React, { Component } from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Picker
} from 'react-native'

const background = require("../img/background.png");
const backIcon = require("../img/back.png");
const personIcon = require("../img/person.png");
const lockIcon = require("../img/lock.png");
const emailIcon = require("../img/email.png");
const wifiIcon = require("../img/mac_address.png");

const Realm = require('realm');

export default class SignupScreen extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        macAddress: '',
        password: '',
        confirmPassword: ''
    }

    updateFormField = fieldName => text => {
        this.setState({ [fieldName]: text })
    }

    createAccount = () => {
        const { firstName, lastName, email, macAddress, password, confirmPassword } = this.state
        console.log('firstName', firstName);
        console.log('lastName', lastName);
        console.log('email', email);
        console.log('macAddress', macAddress);
        console.log('password', password);
        console.log('confirmPassword', confirmPassword);

        Realm.open({
            schema: [
                {
                    name: 'User',
                    properties: {
                        firstName: 'string',
                        lastName: 'string',
                        email: 'string',
                        macAddress: 'string',
                        password: 'string'
                    }
                }
            ]
        }).then(realm => {
            realm.write(() => {
                realm.create('User',
                    {
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        macAddress: macAddress,
                        password: password
                    }
                );
            });

            const users = realm.objects('User');
            console.log('users', users);
        });
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
                                <Image
                                    source={personIcon}
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
                                    underlineColorAndroid='transparent'
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

                        <TouchableOpacity onPress={ () => this.createAccount() }>
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
        marginTop: 50,
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
        marginTop: 20,
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
        borderWidth: 1,
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
    }
});
