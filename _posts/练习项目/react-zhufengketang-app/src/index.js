import React from 'react';
import ReactDOM from 'react-dom';
import TabBar from 'src/components/TabBar/TabBar';
import 'src/common/index.less';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import store from 'src/store';
import { Provider } from 'react-redux';
import { Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import Login from 'src/page/Login/Login';
import Reg from 'src/page/Reg/Reg';
import history from './history';
import Detail from 'src/page/Detail/Detail';
import ProtectedRouter from 'src/ProtectedRouter';
import AsyncCom from './AsyncComponent';
// import Home from 'src/page/Home';
// import Lesson from 'src/page/Lesson';
// import Profile from 'src/page/Profile';
let Home = AsyncCom(() => import('src/page/Home/index.js'));
let Profile = AsyncCom(() => import('src/page/Profile/index.js'));
let Lesson = AsyncCom(() => import('src/page/Lesson/index.js'));
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route
                render={({ location }) => (
                    <React.Fragment>
                        <TransitionGroup className="full">
                            <CSSTransition
                                key={location.key}
                                classNames="fade"
                                timeout={200}
                            >
                                <div location={location} className="full">
                                    <Switch>
                                        <Route
                                            path="/"
                                            exact={true}
                                            component={Home}
                                        />
                                        <Route path="/home" component={Home} />
                                        <Route
                                            path="/profile"
                                            component={Profile}
                                        />
                                        <ProtectedRouter
                                            path="/lesson"
                                            component={Lesson}
                                        />
                                        <Route
                                            path="/login"
                                            component={Login}
                                        />
                                        <Route path="/reg" component={Reg} />
                                        <Route
                                            path="/detail"
                                            component={Detail}
                                        />
                                        <Redirect to="/home" />
                                    </Switch>
                                </div>
                            </CSSTransition>
                        </TransitionGroup>
                        <TabBar />
                    </React.Fragment>
                )}
            />
        </Router>
    </Provider>,
    document.querySelector('#app')
);
if (module.hot) {
    module.hot.accept();
}
