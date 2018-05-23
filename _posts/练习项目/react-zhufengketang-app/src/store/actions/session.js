import * as types from '../action-types';
import { login, reg, validate } from '../../api/session';
import history from 'src/history';

let actions = {
    setLogin(userInfo) {
        return dispatch => {
            login(userInfo).then(data => {
                dispatch({ type: types.SET_USER_INFO, ...data });
                if (data.error === 0) {
                    history.push('/profile');
                }
            });
        };
    },
    setReg(userInfo) {
        return dispatch => {
            reg(userInfo).then(data => {
                dispatch({ type: types.SET_USER_INFO, ...data });
                if (data.error === 0) {
                    history.push('/login');
                }
            });
        };
    },
    setValidate() {
        return dispatch => {
            validate().then(data => {
                dispatch({ type: types.SET_USER_INFO, ...data });
            });
        };
    }
};
export default actions;
