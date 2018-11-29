import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// most complex
class App extends Component {

  componentDidMount() {
    searchLocation('NYC').then(a => a.json()).then(result => console.log(result))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;



const endpoint = 'https://api.yelp.com/v3/';
const options = {
  method: 'GET',
  headers: {
    Authorization: 'Bearer rMdjdi0JZaxuuMN2yL_3dp4Q9Kb-uUkP7CxocezXcZOOcSc4FTqRch25cRbnR6VFKlW9Y4qvnwUSw63NnrWwWzK7NpTceezNM_WBTjvz8_Awse6B4Rhofx7LOHv9W3Yx'
  }
}

const apiGet = (controller, action) {
  return fetch(`${endpoint}/${controller}${action}`, {...options, method: 'GET'})
}

const searchLocation = (location) => {
  return apiGet(`business`, `/search?location=${location}`)
}


const searchByLatLong = (latitude, longitude) => {
    return apiGet(`business`, `/search?longitude=${longitude}&latitude=${latitude}`)
}

// complex
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount() {
    searchLocation('NYC').then(a => a.json()).then(result => console.log(result))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;



const endpoint = 'https://api.yelp.com/v3/businesses';
const options = {
  method: 'GET',
  headers: {
    Authorization: 'Bearer rMdjdi0JZaxuuMN2yL_3dp4Q9Kb-uUkP7CxocezXcZOOcSc4FTqRch25cRbnR6VFKlW9Y4qvnwUSw63NnrWwWzK7NpTceezNM_WBTjvz8_Awse6B4Rhofx7LOHv9W3Yx'
  }
}

const apiGet = (action) {
  return fetch(`${endpoint}/${action}`, {...options, method: 'GET'})
}

const searchLocation = (location) => {
  return apiGet(`search?location=${location}`)
}
const searchByLatLong = (latitude, longitude) => {
    return fetch(`${endpoint}/search?longitude=${longitude}&latitude=${latitude}`, options)
}

// class API
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentWillMount() {
    let api = new API();
    api.searchLocation('NYC').then(a => a.json()).then(result => console.log(result))
    //api.searchByLatLong(12.555, 144.2312)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;


class API {
  constructor() {
    this.url = 'https://api.yelp.com/v3/businesses';
  }

  getHeaders() {
    return new Headers().append('Authorization', 'Bearer U3ECvC1txF0ib9l3mu9rkKx-xkfWApu_qi5xbDzBOFws3UxZwBzRMyPmjMbbqRfQdfZ0jksIIUTkAh8sBQQVv8wDqsDPSsw4zIVMCkTT9tdzj6-nD48CzaN4dnL9W3Yx')
  }

  searchLocation(location) {
    return fetch(`${this.url}/search?location=NYC`, { method: 'GET', headers: this.getHeaders()})
  }
  searchByLatLong(latitude, longitude) {
    return fetch(`${this.url}/search?longitude=${longitude}&latitude=${latitude}`)
  }
}