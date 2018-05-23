import * as types from '../action-types';
import { getSlider, getLesson } from '../../api/home';

let actions = {
    setLesson(lesson) {
        return (dispatch, getState) => {
            dispatch({ type: types.SET_CURRENT_LESSON, lesson });
            actions.refresh()(dispatch, getState);
        };
    },
    setSlider() {
        return dispatch => {
            //loading
            dispatch({ type: types.SET_SLIDERS });
            //轮播图数据
            dispatch({ type: types.SET_SLIDERS_SUCCESS, payload: getSlider() });
        };
    },
    setLessonList() {
        return (dispatch, getState) => {
            let {
                currentLesson,
                lesson: { hasMore, loading, limit, offset }
            } = getState().home;
            if (!hasMore || loading) {
                return;
            }
            dispatch({ type: types.SET_LESSON });
            dispatch({
                type: types.SET_LESSON_SUCCESS,
                payload: getLesson(offset, limit, currentLesson)
            });
        };
    },
    refresh() {
        return (dispatch, getState) => {
            dispatch({ type: types.CLEAR_LESSON });
            actions.setLessonList()(dispatch, getState);
        };
    }
};
export default actions;
