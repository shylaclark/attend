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
import Header from "../components/Header";
import ListFooter from "../components/ListFooter";
import SectionHeader from "../components/SectionHeader";

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

            <Image
                source={background}
                style={[styles.container, styles.background, styles.bg]}
                resizeMode="cover"
            >
                <View style={styles.container2}>
                    <View style={styles.headerTitleView}>
                        <Text style={styles.titleViewText}>Attendance</Text>
                    </View>
                </View>
                <View style={styles.container3}>
                    <TouchableOpacity activeOpacity={.5} onPress={ () => this.startScanning() }>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Take Roll</Text>
                        </View>
                    </TouchableOpacity>
                    <ListView

                        style={styles.container}
                        automaticallyAdjustContentInsets={false}
                        dataSource={this.state.dataSource}
                        renderRow={(rowData) => <Text>{rowData}</Text>}
                        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
                        renderFooter={() => <ListFooter title = {'End Roll'} navigation={'CourseList'} navigate = {navigate}/>}
                        contentBackgroundColor={'black'}

                    />
                </View>
                <View style={styles.footerContainer}>

                </View>
            </Image>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column'
    },container2: {
        flexDirection:'row',
        paddingTop: 30,
        alignItems: 'center',
        backgroundColor: '#000',
    },
    container3: {
        flexDirection:'column',
        padding: 8,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: '#000',
    },
    button: {
        flexDirection: 'column',
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
    separator: {

        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E',
    },
    bg: {
        paddingTop: 30,
    },
    background: {
        flex:1,
        height: '100%',
        width: '100%',
        justifyContent: 'center',           // Center vertically
        alignItems: 'center',
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
    inputContainer: {
        borderWidth: 1,
        borderBottomColor: '#CCC',
        borderColor: 'transparent',
        flexDirection: 'row',
        height: 50,
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

