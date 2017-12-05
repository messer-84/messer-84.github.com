import React from 'react';

const User = (props) => {
    const {item, updateField, id} = props;
    return (
        <tr>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>
                <input
                    type="text"
                    value={item.hours}
                    onChange={(e) => updateField(e, id, 'hours')}
                />
            </td>
            <td>
                <input
                    type="text"
                    value={item.rate}
                    onChange={(e) => updateField(e, id, 'rate')}
                />
            </td>
            <td>{item.rate*item.hours}</td>
        </tr>
    );
};

export default User;