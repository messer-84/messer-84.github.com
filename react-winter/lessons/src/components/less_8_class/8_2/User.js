import React from 'react';

const User = (props) => {
  const {name, lastName, age} = props;
  return (
      <tr>
        <td>{name}</td>
        <td>{lastName}</td>
        <td>{age}</td>
      </tr>
  );
};

export default User;