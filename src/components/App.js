import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import User from './User';
import {MyProvider, MyContext} from '../providers/UserProvider';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Welcome to YELP camp!</h1>
        <Link to='/add'>Add new user</Link>
        <MyProvider>
          <MyContext.Consumer>
          {
            (users) =>
            <div className="user-list">
            {
              users.map((user, index) =>
                <User key={index} user={user} />
              )
            }
            </div>
          }
          </MyContext.Consumer>
        </MyProvider>
      </div>
    );
  }

}

export default App;
