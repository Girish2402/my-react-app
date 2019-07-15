import React, { Component } from 'react';


class AddUser extends Component{
	state = {
		name: null,
		email: null,
		age: null
	}

	handleOnChange = (e) => {
		console.log(e.target.value)
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	handleOnSubmit = (e) => {
		e.preventDefault();
		this.props.addUser(this.state)
	}
	
	render(){
		return(
			<form onSubmit={this.handleOnSubmit}>
				Name:<br/>
					<input type="text" name="name" id="name" onChange={this.handleOnChange}/>
				<br/><br/>
				Email:<br/>
				<input type="text" name="email" id="email" onChange={this.handleOnChange}/>
				<br/><br/>
				Age:<br/>
				<input type="text" name="age" id="age" onChange={this.handleOnChange}/>
				<br/><br/>
				<input type="submit" value="Submit"/>
			</form> 
		)
	}
}

export default AddUser