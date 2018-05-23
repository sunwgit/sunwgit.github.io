import * as types from '../action-types';

let initState = {
    error: 0,
    msg: '',
    user: null
};
export default function session(state = initState, action) {
    if (action.type === types.SET_USER_INFO) {
        return { error: action.error, msg: action.msg, user: action.user };
    }
    return state;
}
