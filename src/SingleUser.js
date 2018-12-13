import React, { Component } from 'react';
import User from './User';

import {MyProvider, MyContext} from './MyProvider';


export default class SingleUser extends Component {
    componentDidMount() {
        console.log(`user id is: ${this.props.match.params.id}`);

        // fetch nad this.props.match.params.id
    }
  render() {
      console.log(this.props.match);
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
                <User key={index} user={user} />
              )
            }
            </div>
        }

        </MyContext.Consumer>
      </MyProvider>
    )
  }
}
