import React from 'react';

const User = (props) => {
	const {name, lastName, age,id, showMessage} = props;
	return (
			<tr>
				<td>{name}</td>
				<td>{lastName}</td>
				<td>{age}</td>
				<td>
					<a href="#" onClick={() => {
						showMessage(id)
					}}>Push
					</a>
				</td>
			</tr>
	);
};

export default User;