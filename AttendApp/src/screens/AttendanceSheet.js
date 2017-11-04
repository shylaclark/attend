import React, { Component } from 'react';
import {
    AppRegistry,
    ListView,
    NativeAppEventEmitter,
    View,
    Text,
    Button } from 'react-native';
import BleManager from 'react-native-ble-manager';

class BluetoothScanner extends Component {
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
        return (
            <View style={styles.container}>
                <Image
                    source={background}
                    style={[styles.container, styles.bg]}
                    resizeMode="cover"
                >
                    <View style={styles.headerContainer}>
                        <View style={styles.headerTitleView}>
                            <Text style={styles.titleViewText}>Attendance List</Text>
                        </View>
                    </View>
                    <View style={styles.inputsContainer}>
                        <Button onPress={() => this.startScanning()} title="Start scanning"/>
                        <ListView
                            enableEmptySections={false}
                            automaticallyAdjustContentInsets={false}
                            dataSource={this.state.dataSource}
                            renderRow={(rowData) => <Text>{rowData}</Text>}
                        />
                    </View>
                    <View style={styles.footerContainer}>


            </View>
        );
    }
}

AppRegistry.registerComponent('BluetoothScanner', () => BluetoothScanner);