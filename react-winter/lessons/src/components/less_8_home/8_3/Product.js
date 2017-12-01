import React from 'react';

const Product = (props) => {
	const {
		name,
		price,
		count,
		total,
		id,
		deleteProduct,
		checked,
		changeChecked
	} = props;

	return (
			<tr>
				<td>{name}</td>
				<td>{price}</td>
				<td>{count}</td>
				<td>{total}</td>
				<td>
					<input
							type="checkbox"
							name={id}
							checked={checked}
							onChange={() => {
								changeChecked(id)
							}} />
				</td>
				<td>
					<button onClick={() => {
						deleteProduct(id)
					}}>Удалить
					</button>
				</td>
			</tr>
	);
};

export default Product;