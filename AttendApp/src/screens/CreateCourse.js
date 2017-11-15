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

const background = require("../img/background.png");

const Realm = require('realm');

export default class CreateCourse extends Component {

    state = {
        courseName: ' ',
        courseDescription: ' '
    }

    updateFormField = fieldName => text => {
        this.setState({ [fieldName]: text })
    }

    createAccount = (navigate) => {
        const { courseName, courseDescription } = this.state
        // console.log('firstName', firstName);
        // console.log('lastName', lastName);
        // console.log('email', email);
        // console.log('macAddress', macAddress);
        // console.log('password', password);
        // console.log('confirmPassword', confirmPassword);

        Realm.open({
            schema: [
                {
                    name: 'Course',
                    properties: {
                        courseName: 'string',
                        courseDescription: 'string'
                    }
                }
            ]
        }).then(realm => {

            realm.write(() => {
                realm.create('Course',
                    {
                        courseName: courseName,
                        courseDescription: courseDescription
                    }
                );
            });

            navigate('CourseList');

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
                            <Text style={styles.titleViewText}>Create Course</Text>
                        </View>
                    </View>

                    <View style={styles.inputsContainer}>
                        <View style={styles.inputContainer}>
                            <TextInput
                                onChangeText={this.updateFormField('courseName')}
                                style={[styles.input, styles.whiteFont]}
                                placeholder="Course Name"
                                placeholderTextColor="#FFF"
                                underlineColorAndroid='transparent'
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                                onChangeText={this.updateFormField('courseDescription')}
                                style={[styles.input, styles.whiteFont]}
                                placeholder="Course Description"
                                placeholderTextColor="#FFF"
                                underlineColorAndroid='transparent'
                            />
                        </View>
                    </View>
                    <View style={styles.footerContainer}>

                        <TouchableOpacity onPress={ () => {this.createAccount(navigate);} }>
                            <View style={styles.createcourse}>
                                <Text style={styles.blackFont}>Create Course</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </Image>
            </View>
        )
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
    dropdownText: {
        fontSize: 17,
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
    createcourse: {
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