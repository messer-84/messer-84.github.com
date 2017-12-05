import React from 'react';

const User = (props) => {

  const {item} = props;
  return (
      <div>
        <div>Имя:{item.firstName}</div>
        <div>Фамилия:{item.lastName}</div>
        <div>Возраст:{item.age}</div>
        <br />
      </div>
  );
};

export default User;