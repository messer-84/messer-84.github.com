import React from 'react';

const TaskRow = props => {
	const {
		name,
		status,
		id,
		editing,
		nameValue,
		updateNameValue,
		updateStatus,
		updateName,
		removeTask,
		showEditField,
		hideEditField,
	} = props;

	return (
			<div className={status ? 'done' : 'new'}>
      <span>
          <input
							type="checkbox"
							id={id}
							checked={status || false}
							onClick={() => updateStatus(id)}
					/>
        <label htmlFor={id}>
          {name}
        </label>
      </span>
				<span>
        {editing && <span>
            <input
								type="text"
								value={nameValue}
								onChange={e => {
									updateNameValue(e, id);
								}}
						/>
            <button onClick={() => {
							updateName(id);
						}}>Submit</button>
          </span>}
      </span>
				{!editing && <button onClick={() => {
					showEditField(id);
				}}>Edit</button>}
				{editing && <button onClick={() => {
					hideEditField(id);
				}}>Cancel</button>}
				<button onClick={() => {
					removeTask(id);
				}}>Remove
				</button>
			</div>
	);
};

export default TaskRow;
