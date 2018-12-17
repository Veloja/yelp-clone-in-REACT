import React, { Component } from 'react';

import {MyProvider, MyContext} from './MyProvider';
import * as PageService from './PageService';


export default class SingleUser extends Component {
  componentDidMount() {
    const id = this.props.match.params.id
    PageService.increasePageVisits(+id)
  }

  render() {
    return (
      <MyProvider>
        <MyContext.Consumer>
        {
          (users) =>
            <div className="user-list">
            {
              users
                .filter((user) => user.id === +this.props.match.params.id)
                .map((user, index) =>
                // <User key={index} user={user} />
                  <div key={index}>
                    <h1>{user.first_name}</h1>
                    <h5>{user.last_name}</h5>
                    <img src={user.avatar} />
                    <p>Jersey number: {user.id}</p>
                    <span>page visited: {PageService.getPageVisits(+user.id)}</span>
                  </div>
              )
            }
            </div>
        }

        </MyContext.Consumer>
      </MyProvider>
    )
  }
}
