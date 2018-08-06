/**
 * Created by chaos
 * on 2018/8/3. 17:15
 * 文件描述：
 */

import React, {Component} from 'react';
import {Animated, Platfrom} from 'react-native'
import {Actions} from 'react-native-router-flux'
import SplashScreen from './widget/native/SplashNative'
import userActions from '../store/actions/user'
import styles ,{screenHeight,screenWidth}from '../style'


class WelcomePage extends Component {


    constructor(props) {
        super(props);
        this.toNext = this.toNext.bind(this);
        this.state = {
            progress: new Animated.Value(0)
        }
    }

    componentDidMount() {
        //处理白屏
        if (Platfrom.OS === 'android') {
            SplashScreen.hide();
        }

        //是否登录，是否有用户信息
        userActions.initUserInfo().then((res) => {
            this.toNext(res);
        });

        Animated.timing(this.state.progress, {
            toValue: 1,
            duration: 2000,
            easing: Easing.linear,
        }).start();
    }

    componentWillUnmount() {
        if (this.refs.lottieView) {
            this.refs.lottieView.reset();
        }
    }


    toNext(res) {
        setTimeout(() => {
            if (res && res.result) {
                Actions.reset("MainTabPage");
            }
        })
    }


    render() {
        return(
            <View style={[styles.mainBox,{backgroundColor:Constant.white}]}>
                {Hello}
            </View>
        )
    };

}

export default WelcomePage;