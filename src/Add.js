import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './App.css';


class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      number: null
    }
  }

  render() {
    return (
      <div>
        <Link to='/'>go to > HOME</Link>
        <h2>add another one page</h2>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Last Name" />
        <input type="number" placeholder="Jersey number" />
        <button>Save</button>
      </div>
    );
  }

}

export default Add;