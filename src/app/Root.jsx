import React, {Component} from 'react'
import {BrowserRouter, Router, HashRouter, Match, Route, Link, hashHistory} from 'react-router-dom';
import PageContainer from './container/PageContainer';
import PlayerContainer from './container/PlayerContainer';
import HeaderContainer from './container/HeaderContainer';

export default class Root extends Component {
    render() {
        return (
            <div className="container">
                <HeaderContainer/>
                <Route path="/" exact component={PlayerContainer}/>
                <Route path="/list" component={PageContainer}/>
            </div>
        )
    }
}