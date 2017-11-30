import React, { Component } from 'react';
import { TextInput, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import CourseModel from './CourseModel';
import CourseService from './CourseService';
import Utils from './Utils';
import Header from './Header';
import ListFooter from './ListFooter';

class CourseCreator extends Component {
    constructor(props) {
        super(props);
        // this.onKeyPress = this.onKeyPress.bind(this);
    }

    state = {
      courseDepartment: '',
      courseNumber: '',
      courseSection: '',
      courseTitle: ''
    }

    updateFormField = fieldName => text => {
        this.setState({ [fieldName]: text })
    }

    // componentWillMount() {
    //     this.setState({
    //         newValue: ''
    //     });
    // }

    onKeyPress(){
      console.log(this);

      console.log('onKeyPress');
      //  if (this.state.newValue) {
            var newDataItem = new CourseModel(this.state.courseDepartment, this.state.courseNumber, this.state.courseSection, this.state.courseTitle, null, true);
            console.log(newDataItem);

            // var dataList = this.props.data;
            // var dataItem = Utils.findCourse(newDataItem, dataList);
            // if(dataItem) {
            //     Utils.move(dataList, (dataList.indexOf(dataItem)), 0);
            //
            //     this.setState({
            //         newValue: ''
            //     });
            //     this.props.updateDataList(dataList);
            //     return;
            // }

            // dataList.unshift(newDataItem);
            CourseService.save(newDataItem);

            this.setState({
              courseDepartment: '',
              courseNumber: '',
              courseSection: '',
              courseTitle: ''
            });
            // this.props.updateDataList(dataList);
        // }
    }
    //this.id = Utils.guid();
    //this.courseDepartment = courseDepartment;
    //this.courseNumber = courseNumber;
    //this.courseTitle = courseTitle ;
    //this.courseSection = courseSection || '0000';
    //this.active = active || true;
    //this.instructor = instructor;
    //this.createdAt = new Date();
    //this.updatedAt = new Date();
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.inputsContainer}>
                <Header title={'Create Course'}></Header>
                < View styl={styles.inputsContainer}>
                    <TextInput style={[styles.inputContainer, {fontSize: 16, backgroundColor: '#000', color: "#FFF"}]}
                               placeholder='Department Code'
                               placeholderTextColor='#FFF'
                               blurOnSubmit={false}
                               onChangeText={this.updateFormField('courseDepartment')}
                               value={this.state.courseDepartment}>
                    </TextInput>
                    <TextInput style={[styles.inputContainer, {fontSize: 16, backgroundColor: '#000', color: "#FFF"}]}
                               placeholder='Course Number'
                               placeholderTextColor='#FFF'
                               blurOnSubmit={false}
                               onChangeText={this.updateFormField('courseNumber')}
                               value={this.state.courseNumber}>
                    </TextInput>
                    <TextInput style={[styles.inputContainer, {fontSize: 16, backgroundColor: '#000', color: "#FFF"}]}
                               placeholder='Course Section'
                               placeholderTextColor='#FFF'
                               blurOnSubmit={false}
                               onChangeText={this.updateFormField('courseSection')}
                               value={this.state.courseSection}>

                    </TextInput>
                    <TextInput style={[ styles.inputContainer, {fontSize: 16, backgroundColor: '#000', color: "#FFF"}]}
                               placeholder='Course Title'
                               placeholderTextColor='#FFF'
                               blurOnSubmit={false}
                               onChangeText={this.updateFormField('courseTitle')}
                               value={this.state.courseTitle}>
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

module.exports = CourseCreator;
