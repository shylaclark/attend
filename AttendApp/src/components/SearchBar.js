import React, { Component } from 'react';
import { TextInput } from 'react-native';
import CourseModel from './CourseModel';
import CourseService from './CourseService';
import Utils from './Utils';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    componentWillMount() {
        this.setState({
            newValue: ''
        });
    }

    onChange(event){
        var title = event.nativeEvent.text;
        var dataList = this.props.data.filter((item) => item.title.match(new RegExp('.*' + title +'.*', 'gi')));

        this.setState({
            newValue: title
        });
        this.props.updateDataList(dataList);
    }

    render() {
        return (
            <TextInput style={{height: 36, padding: 4, marginBottom: 0, fontSize: 16, borderWidth: 1, borderColor: '#eee', borderRadius: 8, backgroundColor: '#fff'}}
                       placeholder='Add a todo or Search'
                       blurOnSubmit={false}
                       value={this.state.newValue}
                       onChange={this.onChange}>
            </TextInput>
        );
    }
}

module.exports = SearchBar;