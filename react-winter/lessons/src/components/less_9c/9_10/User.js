import React from 'react';

const User = (props) => {

  const {item, addSign, updateName, id} = props;
  return (
      <div>
        <div>Имя:{item.firstName}</div>
        <div>Фамилия:{item.lastName}</div>
        <div>Возраст:{item.age}</div>
          <div><input type="text" value={item.firstName} onChange={(e)=>updateName(e,id)}/></div>
          <div><button onClick={()=>addSign(id)}>Click</button></div>

        <br />
      </div>
  );
};

export default User;