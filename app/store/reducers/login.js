/**
 * Created by chaos
 * on 2018/8/3. 11:27
 * 文件描述：
 */

import {LOGIN} from "../type";
import {createReducer} from "../index";

const initialState = {
    type: LOGIN.ClEAR,
}

const actionHandler = {
    [LOGIN.IN]: (state, action) => {
        return {};
    },
    [LOGIN.CLEAR]: (state, action) => {
        return {};
    },
};

export default createReducer(initialState, actionHandler);