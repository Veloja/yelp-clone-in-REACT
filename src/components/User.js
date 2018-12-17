import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class User extends Component {

  render() {
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