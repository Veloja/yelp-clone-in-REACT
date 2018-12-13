import React, { Component } from 'react';
import {withRouter} from 'react-router';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'


import './App.css';


class User extends Component {
    constructor(props) {
        super(props)
    }

  render() {
    console.log('ovo je odavde', this.props.user);
    return (
        <div className="user">
            <h5>{this.props.user.first_name}</h5>
            <div className="img-holder">
                <img src={this.props.user.avatar} alt="avatar" />
            </div>
            <Link to={`/user/${this.props.user.id}`} >See more info about {this.props.user.first_name}</Link>
        </div>
    );
  }

}

export default User;