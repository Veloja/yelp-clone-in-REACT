import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Add from './components/Add';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SingleUser from './components/SingleUser';


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