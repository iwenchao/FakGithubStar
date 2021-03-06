/**
 * 作者：chaos
 * 创建日期：2018-06-25 14:23
 * 文件描述：
 */

import * as constant from "./constant";
import {StatusBar} from "react-native";

export const navBarHeight = (Platform.OS === 'android') ? constant.andrnavHeaderHeight : constant.iosnavHeaderHeight;
export const screenHeight = Dimensions.get("window").height;
export const screenWidth = Dimensions.get("window").width;


const styles = StyleSheet.create({
    routerStyle: {
        flex: 1,
        backgroundColor: constant.mainBackgroundColor,
        shadowColor: null,
        shadowOffset: null,
        shadowOpacity: null,
        shadowRadius: null,
    },
    navigationBar: {
        backgroundColor: constant.primaryColor,
        paddingTop: StatusBar.currentHeight,
        height: navBarHeight
    },
    mainBox:{
        backgroundColor:constant.mainBackgroundColor,
        flex:1
    }
});

export default styles;