import React, { Component } from 'react';
import {
    ListView,
    NativeAppEventEmitter,
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity } from 'react-native';

import BleManager from 'react-native-ble-manager';
const background = require("../img/background.png");

export default class AttendanceSheet extends Component {
    constructor(props){
        super(props);

        const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.devices = [];
        this.state = {
            dataSource: dataSource.cloneWithRows(this.devices)
        };
    }

    componentDidMount() {
        console.log('bluetooth scanner mounted');

        NativeAppEventEmitter.addListener('BleManagerDiscoverPeripheral',(data) =>
        {
            let device = 'device found: ' + data.name + '(' + data.id + ')';

            if(this.devices.indexOf(device) == -1) {
                this.devices.push(device);
            }

            let newState = this.state;
            newState.dataSource = newState.dataSource.cloneWithRows(this.devices);
            this.setState(newState);
        });

        BleManager.start({showAlert: false})
            .then(() => {
                // Success code
                console.log('Module initialized');
            });
    }

    startScanning() {
        console.log('start scanning');
        BleManager.scan([], 120);
    }

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
                            <Text style={styles.titleViewText}>Attendance Sheet</Text>

                        </View>
                    </View>
                    <View style={styles.inputsContainer}>
                        <TouchableOpacity activeOpacity={.5} onPress={ () => this.startScanning() }>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Take Attendance</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={.5} onPress={ ()=> navigate('CourseList') }>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>End Attendance</Text>
                            </View>
                        </TouchableOpacity>
                        <ListView

                            automaticallyAdjustContentInsets={false}
                            dataSource={this.state.dataSource}
                            renderRow={(rowData) => <Text>{rowData}</Text>}
                        />
                    </View>
                    <View style={styles.footerContainer}>

                    </View>
                </Image>
            </View>
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
    container: {
    },
    bg: {
        paddingTop: 30,
        width: null,
        height: null
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
