/**
 * Created by chaos
 * on 2018/8/3. 17:15
 * 文件描述：
 */

import React, {Component} from 'react';
import {
    Animated,
    Platfrom
} from 'react-native'
import {Actions} from 'react-native-router-flux'
import SplashScreen from './widget/native/SplashNative'


class WelcomePage extends Component {


    constructor(props) {
        super(props);
        this.toNext = this.toNext.bind(this);
        this.state = {
            progress: new Animated.Value(0)
        }
    }

    componentDidMount() {
        if (Platfrom.OS === 'android') {
            SplashScreen.hide();
        }

        //是否登录，是否有用户信息

    }

    toNext(res) {
        setTimeout(() => {
            if (res && res.result) {
                Actions.reset("MainTabPage");
            }
        })
    }

}