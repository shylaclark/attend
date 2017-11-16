import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SignupScreen from "../screens/SignupScreen";
import LoginScreen from "../screens/LoginScreen";
import CourseList from "../screens/CourseList";
import AttendanceSheet from "../screens/AttendanceSheet";
import HomeScreen from "../screens/HomeScreen";
import CreateCourse from "../screens/CreateCourse";
const styles = StyleSheet.create({
    container: {
        flex: 2,
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: '#000',
        flexDirection: 'column',

    },
    button: {
        flexDirection: 'column',
        flex:1,
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

const ListFooter = (props) => (
    <View style={styles.container}>
        <TouchableOpacity
            activeOpacity={.5}
            style ={styles.button}
            onPress={() => props.navigate(props.navigation) }>
            <Text style={styles.buttonText}>{props.title}</Text>
        </TouchableOpacity>
    </View>
);

export default ListFooter;