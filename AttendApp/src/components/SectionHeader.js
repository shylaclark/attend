import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        justifyContent: 'center',
        backgroundColor: '#000',
        borderWidth: StyleSheet.hairlineWidth,
    },
    text: {
        fontSize: 13,
    },
});

const SectionHeader = (props) => (
    <View style={styles.container}>

    </View>
);

export default SectionHeader;