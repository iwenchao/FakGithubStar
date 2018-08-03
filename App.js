/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import store from "./app/store/";
import {getLanguageCurrent} from "./app/utils/actionUtils";
import {changeLocale} from "./app/style/i18n";
import {Provider} from "react-redux";


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {

    constructor() {
        super();
        this.state = {
            store: store,
            show: false
        };

        getLanguageCurrent().then((res) => {
            changeLocale(res.language);
            this.setState({
                show: true
            })
        })
    }


    render() {
        if(!this.state.show){
            return <View/>
        }

        return (
            <Provider store={this.state.store}>
                {getRouter()}
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
