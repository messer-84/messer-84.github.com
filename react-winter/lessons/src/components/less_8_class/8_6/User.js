import React from 'react';

const User = (props) => {
  const {name, lastName, age, id, deleteUser} = props;
  console.log(deleteUser);

  return (
      <tr>
        <td>{name}</td>
        <td>{lastName}</td>
        <td>{age}</td>
        <td>
          <a href="#" onClick={() => {
            deleteUser(id)
          }}>Push
          </a>
        </td>
      </tr>
  );
};

export default User;