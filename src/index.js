import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Add from './Add';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SingleUser from './SingleUser';


class Root extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path={'/'} component={App} />
                    <Route exact path={'/add'} component={Add} />
                    <Route path={'/user/:id'} component={SingleUser} />
                </Switch>
            </BrowserRouter>
            );
        }
    }




ReactDOM.render(<Root />, document.getElementById('root'));