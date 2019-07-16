import React from 'react';

const Ninja = (props) => {
	const userDetails = props.data;
	const returnObject = userDetails.map(user => {
		// if(user.age > 20){
			return (
				<tr key={user.id}>
					<td>{user.name}</td>
					<td>{user.email}</td>
					<td>{user.age}</td>
					<td><button onClick={() => {props.deleteUser(user.id)}}>delete</button></td>
				</tr>
			)
		// }
	})
	return (
		<table className="user-list">
			<tr key="10">
				<th>Name</th>	
				<th>Email</th>	
				<th>Age</th>
				<th>Action</th>
			</tr>	
			{returnObject}
		</table>
	)
}

export default Ninja;
