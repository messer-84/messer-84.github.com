import React from 'react';

const User = (props) => {
  const {name, lastName, age, showMessage} = props;
  return (
      <tr>
        <td>{name}</td>
        <td>{lastName}</td>
        <td>{age}</td>
        <td>
          <a href="#" onClick={() => {
            showMessage(name)
          }}>Push
          </a>
        </td>
      </tr>
  );
};

export default User;