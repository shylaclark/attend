import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'black',
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

});

const Header = (props) => (
    <View style={styles.container}>
        <View style={styles.headerTitleView}>
            <Text style={styles.titleViewText}>{props.title}</Text>
        </View>
    </View>
);

export default Header;