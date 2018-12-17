import React, { Component } from 'react';
export const MyContext = React.createContext();

export class MyProvider extends Component {
  state = {
    users: [],
  }

  async componentDidMount() {
    const users = JSON.parse(localStorage.getItem('users')) || await this.fetchUsers();
    this.setState({users})
  }

  // componentDidMount() {
  //   const users = JSON.parse(localStorage.getItem('users'))

  //   if (users)
  //     this.fetchUsers()
  //       .then(data => users = data)

  //   this.setState({users})
  // }

  async fetchUsers() {
    const url = 'https://reqres.in/api/users?per_page=10';
    const users = await fetch(url)
      .then(data => data.json())
      .then(data => data.data);

    localStorage.setItem('users', JSON.stringify(users))
    return users;
  }

  render() {
    return (
      <MyContext.Provider value={this.state.users}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

// const then = async () => {
//   return new Promise(async (resolve, reject) => {
//     const value = await fetch('');
//     value ? resolve(value) : reject(value);
//   });
// }