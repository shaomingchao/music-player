import React, {Component} from 'react'
import Header from "./components/Header";

import {BrowserRouter, Router, HashRouter, Match, Route, Link, hashHistory} from 'react-router-dom';
import PageContainer from './container/PageContainer';
import PlayerContainer from './container/PlayerContainer';

export default class Root extends Component {
    componentDidMount(){

    }
    componentWillUnmount(){

    }
    render() {
        return (
            <div className="container">
                <Header/>
                <Route path="/" exact component={PlayerContainer}/>
                <Route path="/list" component={PageContainer}/>
            </div>
        )
    }
}