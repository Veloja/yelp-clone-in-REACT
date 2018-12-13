import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './App.css';


class Add extends Component {

  render() {
    return (
      <div>
        HEY ADD ME
        <Link to='/'>HOME</Link>
      </div>
    );
  }

}

export default Add;