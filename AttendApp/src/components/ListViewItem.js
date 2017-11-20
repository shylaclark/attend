import React, {Component} from 'react';
import {Text, View, TouchableOpacity, TouchableHighlight} from 'react-native';
import RowLink from "./RowLink";
import CourseService from './CourseService';
import AttendanceSheet from "../screens/AttendanceSheet";

//export default
class ListViewItem extends Component{
    constructor(props)
    {
        super(props);
        this._onRowLinkPressed = this._onRowLinkPressed.bind(this);
        this.state =  {
            data: this.props.data
        }
    }

    componentWillReceiveProps(props) {
        this.setState({
            data: props.data
        })
    }

    /*_onRowLinkPressed() {
        //var data = this.state.data;
        let {navigate} = this.props.navigation;
        <View>
            //    <TouchableOpacity activeOpacity={.5} onPress={ ()=> navigate('AttendanceSheet') }>
            //        <View style={styles.inputContainer}>
            //            <Text style={styles.whiteFont}>{this.props.title}</Text>
            //        </View>
            //    </TouchableOpacity>
            </View>

        CourseService.update(data, () => {
            data.completed = !data.completed
            this.setState({
                data: data
            });

            this.props.onActiveChange();

        }
    */
        render(){
            const { navigate } = this.props.navigation;
            let data = this.state.data;
            let color = data.active ? '#C5C8C9' : '#000';
            let textDecorationLine = data.active ? 'line-through' : 'none';
            return(
                <TouchableHighlight underlayColor={'#eee'} style={{paddingTop: 6, paddingBottom: 6, backgroundColor: "#F8F8F8", borderBottomWidth:1, borderColor: '#eee'}} {...this.props.sortHandlers}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <RowLink data={data} color={color} ></RowLink>
                        <Text style={{fontSize:18, color: color, textDecorationLine: textDecorationLine}} onPress={ ()=> navigate('AttendanceSheet') }>{data.courseTitle}</Text>
                    </View>
                </TouchableHighlight>
            )
        }
    }

    module.exports = ListViewItem;