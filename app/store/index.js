/**
 * Created by chaos
 * on 2018/6/26. 10:06
 * 文件描述：
 */

import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';



export function createReducer(initialState, handlers) {
    return function reducer(state = initialState, action) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action);
        } else {
            return state;
        }
    }
}

const createStoreWithMW = applyMiddleware(thunk)(createStore);
const store = createStoreWithMW(reduc)