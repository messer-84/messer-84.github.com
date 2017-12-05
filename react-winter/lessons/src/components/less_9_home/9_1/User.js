import React from 'react';

const User = (props) => {
    const {item, showField, updateName, id} = props;
    console.log('item', item);
    return (
        <div>
            <div>Имя:{item.firstName}</div>
            <div>Фамилия:{item.lastName}</div>
            <div>Возраст:{item.age}</div>
            {item.isShowField &&
            <div>
                <input
                    type="text"
                    value={item.inputValue}
                    onChange={(e) => updateName(e, id)}
                    onBlur={()=>showField(id)}
                />
            </div>}
            {!item.isShowField &&
            <div>
                <button onClick={() => showField(id)}>Edit</button>
            </div>}

            <br/>
        </div>
    );
};

export default User;