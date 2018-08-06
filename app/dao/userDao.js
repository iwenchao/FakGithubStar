/**
 * Author: iwen
 * Create Time: 2018-08-06 21:41
 * Description:
 */

import {AsyncStorage} from 'react-native';
import * as Constant from '../style/constant';

/**
 * 获取本地登录用户信息
 * @returns {Promise<*>}
 */
const getUserInfoLocal = async () => {
    let userText = await AsyncStorage.getItem(Constant.USER_INFO);
    if (userText) {
        let res = JSON.parse(userText);
        return {
            result: true,
            data: res
        }
    } else {
        return {
            result: false
        }
    }
}


export default {
    getUserInfoLocal,
}