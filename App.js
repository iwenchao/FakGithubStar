/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import store from "./app/store/";
import {getLanguageCurrent,getRefreshHandler} from "./app/utils/actionUtils";
import {changeLocale} from "./app/style/i18n";
import {Provider} from "react-redux";
import * as  Constant from './app/style/constant'
import getRouter from './app/router'


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
        });

        //切换语言
        getRefreshHandler().set(Constant.REFRESH_LANGUAGE, () => {
            this.setState({
                show: false
            });
            setTimeout(() => {
                this.setState({
                    show: true
                })
            }, 500);
        })

    }


    render() {
        if (!this.state.show) {
            return <View/>
        }

        return (
            <Provider store={this.state.store}>
                {getRouter()}
            </Provider>
        );
    }
}
