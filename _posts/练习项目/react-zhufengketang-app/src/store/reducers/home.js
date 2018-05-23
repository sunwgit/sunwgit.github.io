import * as types from '../action-types';
let initState = {
    currentLesson: '0',
    slider: {
        loading: false,
        list: []
    },
    lesson: {
        hasMore: true,
        loading: false,
        limit: 5,
        offset: 0,
        lists: []
    }
};
export default function(state = initState, action) {
    switch (action.type) {
        case types.SET_CURRENT_LESSON:
            return { ...state, currentLesson: action.lesson };
        case types.SET_SLIDERS:
            return { ...state, slider: { ...state.slider, loading: true } };
        case types.SET_SLIDERS_SUCCESS:
            return {
                ...state,
                slider: {
                    ...state.slider,
                    loading: false,
                    list: action.payload
                }
            };
        case types.SET_LESSON:
            return { ...state, lesson: { ...state.lesson, loading: true } };
        case types.SET_LESSON_SUCCESS:
            return {
                ...state,
                lesson: {
                    ...state.lesson,
                    loading: false,
                    hasMore: action.payload.hasMore,
                    offset: state.lesson.offset + action.payload.lists.length,
                    lists: [...state.lesson.lists, ...action.payload.lists]
                }
            };
        case types.CLEAR_LESSON:
            return {
                ...state,
                lesson: {
                    ...state.lesson,
                    loading: false,
                    hasMore: true,
                    offset: 0,
                    lists: []
                }
            };
    }
    return state;
}
