import React, {Component} from 'react';

class BlockForAddProduct extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {addNewProduct, updateValue,name} = this.props;

		return (
				<div>
					<form action="#" onSubmit={() => addNewProduct()}>
						<input type="text" value={name} ref={el=>this.name = el} onChange={(e)=>updateValue(e)} />
						<input type="text" value={name} ref="price" onChange={(e)=>updateValue(e)} />
						<input type="text" value={name} ref="count" onChange={(e)=>updateValue(e)} />
						<button>Добавить</button>
					</form>
				</div>
		);
	}

}

export default BlockForAddProduct;