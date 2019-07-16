import React, { Component } from 'react';
import Ninja from '../ninjas';
import AddUser from '../addUsers';

class User extends Component {

	state = {
		users: [
			{ name: "girish", email: "temp123", id: 1, age: 20 },
			{ name: "kishor", email: "temp1234", id: 2, age: 25 }
		]
	}

	addUser = (user) => {
		console.log(user);
		user.id = Math.round(Math.random() * 1000);
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
		return(
			<div className="container">
				<h1 className="center">User Management</h1>
				<AddUser addUser={this.addUser} />
				<br />
				<br />
				<Ninja data={this.state.users} deleteUser={this.deleteUser} />
			</div>
		)
	}
}

export default User