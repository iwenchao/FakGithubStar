/**
 * 作者：chaos
 * 创建日期：2018-06-25 13:55
 * 文件描述：
 */


import {Router} from "react-native-router-flux";
import styles from "./style";
import BackUtils from './utils/backUtils'

const getRouter = () => {
    return (
        <Router
            getSceneStyle={() => {
                return styles.routerStyle
            }}
            backAndroidHandler={
                BackUtils()}>


        </Router>
    )
};
