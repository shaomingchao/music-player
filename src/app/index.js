import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import Root from './Root';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import reducer from './reducers';
import {BrowserRouter, Router, HashRouter, Match, Route, Link, hashHistory} from 'react-router-dom';
import {fetchMusicList} from "./actions/index";

const middleware = [thunk];

const store = createStore(reducer,
    applyMiddleware(...middleware));

fetchMusicList(store.dispatch);

render(
    <Provider store={store}>
        <HashRouter history={hashHistory}>
            <Root/>
        </HashRouter>
    </Provider>,
    document.getElementById("root")
);

// if (module.hot) {
//     module.hot.accept('./Root', () => {
//         const NextRootContainer = require('./Root').default;
//         render((
//             <AppContainer>
//                 <Provider store={store}>
//                     <NextRootContainer/>
//                 </Provider>
//             </AppContainer>
//         ), document.getElementById('root'));
//     })
// }