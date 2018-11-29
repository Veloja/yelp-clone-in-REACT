import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1
    };

  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
         <p>
         </p>
         persons per page:
         <input type="number" min="1" max="5" onChange={this.handleInput} />
            change page:
            <button onClick={this.nextPage}>++</button>
        </header>
      </div>
    );
  }

  handleInput = (e) => {
    this.setState({
      perPage: +e.target.value
    }, this.getUsers);
  }

  getUsers = () => {
    const endpoint = `https://reqres.in/api/users?page=${this.state.page}&per_page=${this.state.perPage}`;

    fetch(endpoint)
    .then(a => a.json())
    .then(data => this.setState({ data }, () => console.log(this.state)));
  }

  nextPage = () => {
    this.setState({
      page: this.state.page + 1
    }, this.getUsers);
  }
}

export default App;