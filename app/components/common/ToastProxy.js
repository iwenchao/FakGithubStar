/**
 * Created by chaos
 * on 2018/8/3. 16:17
 * 文件描述：
 */

import Toast from 'react-native-root-toast'

export default function toast(text, duration = Toast.duration.SHORT, position = Toast.positions.CENTER) {
    return Toast.show(text, {
        duration:duration,

    })
}