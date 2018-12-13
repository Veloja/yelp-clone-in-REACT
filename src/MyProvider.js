import React, { Component } from 'react';
export const MyContext = React.createContext();
export class MyProvider extends Component {
  state = {
    users: []
  }
  componentDidMount() {
    const url = 'https://reqres.in/api/users?per_page=10'
    fetch(url)
    .then(resp => resp.json())
    .then(data => this.setState({
      users: data.data
    }))
  }
  render() {
    return (
      <MyContext.Provider value={this.state.users}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}