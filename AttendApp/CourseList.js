import React, {Component} from 'react';

import {AppRegistry, Text, View, Image, ListView, StyleSheet, TouchableOpacity} from 'react-native';
import AttendanceSheet from "./AttendanceSheet";
import RowLink from "../components/RowLink";
import CreateCourse from "./CreateCourse";
import Header from "../components/Header";
import ListFooter from "../components/ListFooter";
import SectionHeader from "../components/SectionHeader";

const courses = [
    {name: 'CSCI 5101- Programming Language Structure', instructor: 'Dr. ThisGuy'},
    {name: 'CSCI 6363- Agile Software Engineering', instructor: 'Dr. ThisGuy'},
    {name: 'CSCI 5501- Analysis of Algorithms', instructor: 'Dr. ThisGuy'},
    {name: 'CSCI 3301- Computer Organization', instructor: 'Dr. ThisGuy'},
    {name: 'CSCI 2467- Systems Programming Concepts', instructor: 'Dr. ThisGuy'}
]
const background = require("../img/background.png");

export default class CourseList extends Component{
    constructor(props) {
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
            <RowLink navigation={this.props.navigation} title={course.name}></RowLink>
    )
    }

    formatData(data) {
        /* We're sorting by alphabetically so we need the alphabet*/
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

        /* Need somewhere to store our data*/
        const dataBlob = {};
        const sectionIds = [];
        const rowIds = [];

        /* Each section is going to represent a letter in the alphabet so we loop over the alphabet*/
        for (let sectionId = 0; sectionId < alphabet.length; sectionId++) {
            /* Get the character we're currently looking for*/
            const currentChar = alphabet[sectionId];

            /* Get course names that start with the current letter*/
            const course = data.filter((course) => course.name.toUpperCase().indexOf(currentChar) === 0);

            /* If there are any courses that have a name starting with the current letter then we'll
             * add a new section otherwise we just skip over it
             */
            if (course.length > 0) {
                /* Add a section id to our array so the listview knows that we've got a new section*/
                sectionIds.push(sectionId);

                /* Store any data we would want to display in the section header. In our case we want to show
                 * the current character
                 */
                dataBlob[sectionId] = { character: currentChar };

                /* Setup a new array that we can store the row ids for this section*/
                rowIds.push([]);

                /* Loop over the valid classes for this section*/
                for (let i = 0; i < course.length; i++) {
                    /* Create a unique row id for the data blob that the listview can use for reference*/
                    const rowId = `${sectionId}:${i}`;

                    /* Push the row id to the row ids array. This is what listview will reference to pull
                     * data from our data blob
                     */
                    rowIds[rowIds.length - 1].push(rowId);

                    /* Store the data we care about for this row*/
                    dataBlob[rowId] = course[i];
                }
            }
        }

        return { dataBlob, sectionIds, rowIds };
    }

    render(){
        const {navigate} = this.props.navigation;
        return(
            <Image source={background} style={styles.background} resizeMode="cover">

            <ListView
        style={styles.container}
        enableEmptySections={false}
        automaticallyAdjustContentInsets={false}
        dataSource={this.state.courseDataSource}
        renderRow={this.renderRow.bind(this)}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
        renderHeader={() => <Header title={'Courses'} />}
        renderFooter={() => <ListFooter title = {'Create New Course'}/>}
            renderSectionHeader={(sectionData) => <SectionHeader {...sectionData} />}
        contentBackgroundColor={'black'}
            >
            </ListView>




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
        flex:1,
        flexDirection:'column'
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


AppRegistry.registerComponent('CourseList', () => CourseList);