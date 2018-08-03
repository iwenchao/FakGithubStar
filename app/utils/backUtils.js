/**
 * Created by chaos
 * on 2018/8/3. 16:09
 * 文件描述：
 */

import {Actions} from 'react-native-router-flux'
import I18n from '../style/i18n'
import Toast from '../components/common/ToastProxy'

export default function BackUtils() {
    let hasTip = false;
    let ts;
    return function () {
        if (Actions.statusText.routes[0].index > 0) {
            Actions.pop();
            return true;
        }

        ts = Date.now();
        if (!hasTip) {
            let handler = function () {
                let now = Date.now();
                if (now - ts < 1000) {
                    requestAnimationFrame(handler);
                } else {
                    hasTip = false;
                }
            };
            handler();
            hasTip = true;
            Toast(I18n("doublePressExit"));
            return true
        } else {
            //BackHandler.exitApp();
            SlpashScreen.exitApp();
            return true;
        }

    }
}