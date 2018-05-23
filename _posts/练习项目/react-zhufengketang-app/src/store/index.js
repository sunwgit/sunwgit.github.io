import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import reducers from './reducers';
const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk, promise))
);

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//     reducers,composeEnhancers(applyMiddleware(thunk, promise))
// );
window.store = store;
export default store;
