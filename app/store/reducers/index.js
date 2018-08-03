/**
 * Created by chaos
 * on 2018/8/3. 11:20
 * 文件描述：
 */

import {combineReducers} from 'redux';
import login from "./login";


export default combineReducers({
    login: login,
    // user: user,
    // event: event,
    // repository: repository,
    // issue: issue,

});

export function clear(state) {
        // state().event.recei
}