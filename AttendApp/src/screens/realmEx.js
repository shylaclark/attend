import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TextInput,
    TouchableOpacity
} from 'react-native';

const Realm = require('realm');

export default class realmEx extends Component {
    constructor(props) {
    super(props);
    this.state = { realm: null };
}

    componentWillMount() {
    Realm.open({
    schema: [{name: 'Dog', properties: {name: 'string'}}]
}).then(realm => {
    realm.write(() => {
    //realm.create('Dog', {name: 'Rex'});
        let allDogs = realm.objects('Dog');
        realm.delete(allDogs); // Deletes all books
});
    this.setState({ realm });
});
}

    render() {
    const info = this.state.realm
    ? 'Number of dogs in this Realm: ' + this.state.realm.objects('Dog').length
    : 'Loading...';

    return (
    <View style={styles.container}>
        <View style={styles.headerTitleView}>
            <Text style={styles.titleViewText}>
            {info}
            </Text>
        </View>
    </View>
    );
}
}
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