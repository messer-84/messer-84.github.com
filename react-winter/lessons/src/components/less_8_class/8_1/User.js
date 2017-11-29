import React from 'react';

const User = (props) => {
	const {name, lastName, age} = props;
	return (
			<div>
				<div>Имя:{name}</div>
				<div>Фамилия:{lastName}</div>
				<div>Возраст:{age}</div>
				<br/>
			</div>
	);
};

export default User;