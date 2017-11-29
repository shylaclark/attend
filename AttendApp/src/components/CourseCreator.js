import React, { Component } from 'react';
import { TextInput, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import CourseModel from './CourseModel';
import CourseService from './CourseService';
import Utils from './Utils';
import Header from './Header';
import ListFooter from './ListFooter';
class CreateCourse2 extends Component {
    constructor(props) {
        super(props);
        this.onKeyPress = this.onKeyPress.bind(this);
    }

    componentWillMount() {
        this.setState({
            newValue: ''
        });
    }

    onKeyPress(){
        if (this.state.newValue) {
            var newDataItem = new CourseModel(this.state.newValue);

            var dataList = this.props.data;
            var dataItem = Utils.findCourse(newDataItem, dataList);
            if(dataItem) {
                Utils.move(dataList, (dataList.indexOf(dataItem)), 0);

                this.setState({
                    newValue: ''
                });
                this.props.updateDataList(dataList);
                return;
            }

            dataList.unshift(newDataItem);
            CourseService.save(newDataItem);

            this.setState({
                newValue: ''
            });
            this.props.updateDataList(dataList);
        }
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
            <View style={{flex: 1, marginLeft: 10, marginRight: 10}}>
                <Header title={'Courses'}></Header>
                <View style={styles.inputsContainer}>
                        <TextInput style={{height: 36, padding: 4, marginBottom: 0, fontSize: 16, borderWidth: 1, borderColor: '#CCC', borderRadius: 8, backgroundColor: '#000', color: "#FFF"}}
                                   placeholder='Department Code'
                                   placeholderTextColor='#FFF'
                                   blurOnSubmit={false}
                                   value={this.state.newValue.courseDepartment}>
                        </TextInput>
                        <TextInput style={{height: 36, padding: 4, marginBottom: 0, fontSize: 16, borderWidth: 1, borderColor: '#CCC', borderRadius: 8, backgroundColor: '#000', color: '#FFF'}}
                                   placeholder='Course Number'
                                   placeholderTextColor='#FFF'
                                   blurOnSubmit={false}
                                   value={this.state.newValue.courseNumber}>
                        </TextInput>
                        <TextInput style={{height: 36, padding: 4, marginBottom: 0, fontSize: 16, borderWidth: 1, borderColor: '#CCC', borderRadius: 8, backgroundColor: '#000', color: '#FFF'}}
                                   placeholder='Course Section'
                                   placeholderTextColor='#FFF'
                                   blurOnSubmit={false}
                                   value={this.state.newValue.courseSection}>

                        </TextInput>
                        <TextInput style={{height: 36, padding: 4, marginBottom: 0, fontSize: 16, borderWidth: 1, borderColor: '#CCC', borderRadius: 8, backgroundColor: '#000', color: '#FFF'}}
                                   placeholder='Course Title'
                                   placeholderTextColor='#FFF'
                                   blurOnSubmit={false}
                                   value={this.state.newValue.courseTitle}>
                        </TextInput>
                    <TouchableOpacity onKeyPress={() => this.onKeyPress}>
                        <View style={styles.createcourse}>
                            <Text style={styles.blackFont}>Create Course</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <ListFooter navigation= {navigate} nextScreen = {'CourseList'} title={'Finished'}></ListFooter>
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
module.exports = CreateCourse2;