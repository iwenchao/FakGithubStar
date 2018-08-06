/**
 * 作者：chaos
 * 创建日期：2018-06-25 13:55
 * 文件描述：
 */


import {Lightbox, Router, Scene} from "react-native-router-flux";
import styles from "./style";
import BackUtils from './utils/backUtils'
import Scene from "react-native-router-flux/src/Scene";
import Constant from './style/constant'

const getRouter = () => {
    return (
        <Router
            getSceneStyle={() => {
                return styles.routerStyle
            }}
            backAndroidHandler={
                BackUtils()}>

            <Lightbox>
                <Scene key="root"
                       navigationBarStyle={styles.navigationBar}
                       titleStye={{color: Constant.titleTextColor}}>
                    <Scene key="main">
                            <Scene key="WelcomePage" component={{W}}/>
                    </Scene>


                </Scene>

            </Lightbox>

        </Router>
    )
};

export default getRouter;