/**
 * Created by chaos
 * on 2018/8/3. 18:14
 * 文件描述：
 */
import store from "../index";
import * as Constant from '../../style/constant'
import UserDao from '../../dao/userDao'
import {USER} from "../type";

const {dispatch, getState} = store;

const initUserInfo = async () => {
    let token = await AsyncStorage.getItem(Constant.TOKEN_KEY);
    let res = await UserDao.getUserInfoLocal();
    if (res && res.result && token) {
        dispatch({
            type: USER.USER_INFO,
            res: res.data
        });
    }
    return {
        result: res.result && (token !== null),
        data: res.data
    };
};


export default {
    initUserInfo,
}