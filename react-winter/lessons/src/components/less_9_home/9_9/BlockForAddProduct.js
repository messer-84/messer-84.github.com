import React from 'react';

const BlockForAddProduct = (props)=>{
	const {addNewProduct, updateValue, nameValue, priceValue, countValue} = props;
	return (
			<div>
				<form action="#" onSubmit={e => addNewProduct(e)}>
					<input
							type="text"
							value={nameValue}
							onChange={e => updateValue(e, 'name')}
					/>
					<input
							type="text"
							value={priceValue}
							onChange={e => updateValue(e, 'price')}
					/>
					<input
							type="text"
							value={countValue}
							onChange={e => updateValue(e, 'count')}
					/>
					<button>Добавить</button>
				</form>
			</div>
	);
};

export default BlockForAddProduct;