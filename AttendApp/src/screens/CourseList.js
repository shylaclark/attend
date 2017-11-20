import React, {Component} from 'react';

import {AppRegistry, Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
//import AttendanceSheet from "./AttendanceSheet";
//import RowLink from "../components/RowLink";
//import CreateCourse from "./CreateCourse";
//import Header from "../components/Header";
//import ListFooter from "../components/ListFooter";
//import SectionHeader from "../components/SectionHeader";
import ListView from '../components/ListView';
//import { ListView } from 'realm/react-native';

const background = require("../img/background.png");

export default class CourseList extends Component{
    /*getState() {
        console.log("getInitialState");
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let courses = [ realm.objects('Course') ];
        console.log("courses: " + course);
        return {
            //dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3']),
            dataSource: ds.cloneWithRows(courses)
        };
    }
    */

    /*constructor(props) {
        super(props);

        const getSectionData = (dataBlob, sectionId) => dataBlob[sectionId];
        const getRowData = (dataBlob, sectionId, rowId) => dataBlob[`${rowId}`];

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
            sectionHeaderHasChanged : (s1, s2) => s1 !== s2,
            getSectionData,
            getRowData,
        });

        const { dataBlob, sectionIds, rowIds } = this.formatData(courses);
        this.state = {
            courseDataSource: ds.cloneWithRowsAndSections(dataBlob, sectionIds, rowIds),
        };
    }

    renderRow(course, sectionId, rowId, highlightRow){
        return(
            <RowLink navigation={this.props.navigation} title={course.name}/>
        )
    }
    */


    render(){
        //const {courses} = realm.object('Course')
        return(
            <Image source={background} style={styles.background} resizeMode="cover">
                /*<ListView
                    style={styles.container}
                    enableEmptySections={false}
                    automaticallyAdjustContentInsets={false}
                    dataSource={this.state.courseDataSource}
                    renderRow={(rowData) => <Text>{rowData.path}</Text>}
                    //renderRow={this.renderRow.bind(this)}
                    renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
                    renderHeader={() => <Header title={'Courses'} />}
                    renderFooter={() => <ListFooter title = {'Create New Course'} navigation={'CreateCourse'} navigate = {navigate}/>}
                    renderSectionHeader={(sectionData) => <SectionHeader {...sectionData} />}
                    contentBackgroundColor={'black'}

                />
                */
                <View style={styles.container}>
                    <ListView></ListView>
                </View>
            </Image>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flex:1,
        justifyContent:'center',
        padding:10,
        backgroundColor: 'black',
        marginBottom:3
    },
    rowText: {
        flex:1,
        flexDirection: 'row',
        color: 'white'
    },
    separator: {

        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E',
    },
    container: {
                flex: 1,
                justifyContent: 'center',
                paddingTop: 30,
                paddingBottom: 10,
                paddingLeft: 2,
                paddingRight: 2,
                backgroundColor: 'tranparent',
    },
    bg: {
        paddingTop: 30,
        width: null,
        height: null,
    },
    background: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',           // Center vertically
        alignItems: 'center',
    },
    headerContainer: {
        flex: 3,
    },
    inputsContainer: {
        marginTop: 100,
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




//AppRegistry.registerComponent('CourseList', () => CourseList);
module.exports = ListViewItem;