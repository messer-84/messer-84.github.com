import React from 'react';

const User = (props) => {

  const {item, editName, id} = props;
  return (
      <div>
        <div>Имя:{item.firstName}</div>
        <div>Фамилия:{item.lastName}</div>
        <div>Возраст:{item.age}</div>
          <div><input type="text" defaultValue={item.firstName}/></div>
          <div><button onClick={()=>editName(id)}>Click</button></div>

        <br />
      </div>
  );
};

export default User;