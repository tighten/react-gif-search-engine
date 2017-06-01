import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';
import { history } from './../store/configureStore';

import Header from '../containers/Header';
import Home from '../containers/Home';
import Signup from '../containers/Signup';
import Login from '../containers/Login';
import Favorites from '../containers/Favorites';

export default class App extends React.Component {
    render() {
        return (
            <ConnectedRouter history={history}>
                <div>
                    <Header />

                    <div className="container">
                        <Route exact path="/" component={ Home }/>
                        <Route path="/signup" component={ Signup } />
                        <Route path="/login" component={ Login } />
                        <Route path="/favorites" component={ Favorites } />
                    </div>
                </div>
            </ConnectedRouter>
        );
    }
}
