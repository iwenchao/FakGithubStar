/**
 * Created by chaos
 * on 2018/8/3. 16:39
 * 文件描述：
 */
import {NativeModules, Platform} from 'react-native'

const splash = (Platform.OS === "android") ? NativeModules.SplashScreen : {};
export default splash;