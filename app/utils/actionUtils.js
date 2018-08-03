/**
 * Created by chaos
 * on 2018/8/3. 14:03
 * 文件描述：
 */
import {
    AsyncStorage
} from 'react-native'
import * as Constant from "../style/constant";

export const getLanguageCurrent = async () => {
    let language = await AsyncStorage.getItem(Constant.LANGUAGE_SELECT);
    let languageName = await AsyncStorage.getItem(Constant.LANGUAGE_SELECT_NAME);
    return {
        language: language,
        languageName: languageName,
    }
};