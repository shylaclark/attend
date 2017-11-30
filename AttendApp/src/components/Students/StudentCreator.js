import React, { Component } from 'react';
import { TextInput, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import StudentModel from '../Students/StudentModel';
import StudentService from '../Students/StudentsService';
import Utils from '../Utils';
import Header from '../Header';
import ListFooter from '../ListFooter';

class StudentCreator extends Component {
    constructor(props) {
        super(props);
        // this.onKeyPress = this.onKeyPress.bind(this);
    }

    state = {
        studentID: ' ',
        sFirstName: ' ',
        sLastName: ' ',
        sEmail: ' ',
        macAddress: ' ',
    }

    updateFormField = fieldName => text => {
        this.setState({ [fieldName]: text })
    }

    // componentWillMount() {
    //     this.setState({
    //         newValue: ''
    //     });
    // }
    createAccount = (navigate) => {
        const addStudent = this.state

        let existingStudent = StudentService.findAll().some(function(student) {
            return student.studentID === addStudent.studentID;
        });

        if (existingUser) {
            alert("This ID has been used already. Please enter a different studentID.");
        } else {

            UserService.save(addStudent);
            navigate('StudentList');
        }
    };
    onKeyPress(){
        console.log(this);

        console.log('onKeyPress');
        const addStudent = this.state
        let existingStudent = StudentService.findAll().some(function(student) {
            return student.studentID === addStudent.studentID;
        });
        if (existingUser) {
            alert("This ID has been used already. Please enter a different studentID.");
        } else {

            var newDataItem = new StudentModel(this.state.studentID, this.state.sFirstName, this.state.sLastName, this.state.sEmail, this.state.sMacAddress);
            console.log(newDataItem);

            StudentService.save(newDataItem);

            this.setState({
                studentID: ' ',
                sFirstName: ' ',
                sLastName: ' ',
                sEmail: ' ',
                sMacAddress: ' ',
            });
        }
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.inputsContainer}>
                <Header title={'Create Students'}></Header>
                < View styl={styles.inputsContainer}>
                    <TextInput style={[styles.inputContainer, {fontSize: 16, backgroundColor: '#000', color: "#FFF"}]}
                               placeholder='Student ID'
                               placeholderTextColor='#FFF'
                               blurOnSubmit={false}
                               onChangeText={this.updateFormField('studentID')}
                               value={this.state.studentID}>
                    </TextInput>
                    <TextInput style={[styles.inputContainer, {fontSize: 16, backgroundColor: '#000', color: "#FFF"}]}
                               placeholder='First Name'
                               blurOnSubmit={false}
                               onChangeText={this.updateFormField('sFirstName')}
                               value={this.state.sFirstName}>
                    </TextInput>
                    <TextInput style={[styles.inputContainer, {fontSize: 16, backgroundColor: '#000', color: "#FFF"}]}
                               placeholder='Last Name'
                               placeholderTextColor='#FFF'
                               blurOnSubmit={false}
                               onChangeText={this.updateFormField('sLastName')}
                               value={this.state.sLastName}>

                    </TextInput>
                    <TextInput style={[ styles.inputContainer, {fontSize: 16, backgroundColor: '#000', color: "#FFF"}]}
                               placeholder='Email'
                               placeholderTextColor='#FFF'
                               blurOnSubmit={false}
                               onChangeText={this.updateFormField('sEmail')}
                               value={this.state.sEmail}>
                    </TextInput>
                    <TextInput style={[ styles.inputContainer, {fontSize: 16, backgroundColor: '#000', color: "#FFF"}]}
                               placeholder='MAC address'
                               placeholderTextColor='#FFF'
                               blurOnSubmit={false}
                               onChangeText={this.updateFormField('sMacAddress')}
                               value={this.state.sMacAddress}>
                    </TextInput>
                    <View flex={2}/>
                    <View style={styles.footerContainer}>
                        <TouchableOpacity
                            activeOpacity={.5}
                            style ={styles.button}
                            onPress={() => [ this.onKeyPress(), navigate('CourseList')]}>
                            <Text style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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
    },
    background: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',           // Center vertically
        alignItems: 'center',
    },
    headerContainer: {
        flex: 1,
    },
    inputsContainer: {
        //flex: 3,

        marginTop: 10,
        flex: 1,
        marginLeft: 10,
        marginRight: 10
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
        borderColor: 'transparent',
        paddingBottom: 6,
        flexDirection: 'row',
        marginVertical: 10,
        height: 40,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "#CCC"

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
        paddingVertical: 20,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        marginLeft:20,
        marginRight:20,
        bottom: 0
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
    },

});

module.exports = StudentCreator;
