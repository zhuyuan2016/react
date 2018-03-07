import React, { Component } from 'react';
import {
    View,
    Button,
    Text
} from 'react-native';

export default class SecondPageComponent extends Component {
    constructor(props) {
        super(props);
     };

    route_params= this.props.navigation.state.params;

    route_back=()=>{this.props.navigation.goBack()};

    direct(link,params) {
        this.props.navigation.navigate(link,params||{})
    }

    static navigationOptions({navigation}){
        return {
        title:  navigation.state.params.sourcePage,
        headerRight: <Button title="Info" />
    }
    }

    render() {
        return(
            <View>
                <Button onPress={() => this.direct('PageOne',{sourcePage:'我来自第二个页面'})}
                title="跳转至PageOne"
                >
                </Button>
            </View>
        );
    };
}