import React, {Component} from 'react';
import Ninja from './ninjas';
import AddUser from './addUsers';

class App extends Component{

  state = {
    users: [
      { name: "girish", email: "temp123", id: 1, age: 20 },
      { name: "kishor", email: "temp1234", id: 2, age: 25 }
    ]
  }

  addUser = (user) => {
    console.log(user);
    user.id = Math.random();
    let users = [...this.state.users, user]
    this.setState({
      users: users
    });
  }

  deleteUser = (user_id) => {
    console.log(user_id);
    let users = this.state.users.filter(user => {
      return user.id !== user_id;
    })

    this.setState({
      users: users
    })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>ToDo App..</h1>
          <div>
            <AddUser addUser={this.addUser}/>
            <br/>
            <br/>
            <Ninja data={this.state.users} deleteUser={this.deleteUser}/>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
