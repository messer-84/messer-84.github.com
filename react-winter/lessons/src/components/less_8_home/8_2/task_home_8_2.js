import React, {Component} from 'react';

import Product from './Product'
import TotalBlock from './TotalBlock'
/*
 *
 * */

class Task_h_8_2 extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {name: 'Product-1', price: 55, count: 0.2},
        {name: 'Product-2', price: 45.25, count: 0.5},
        {name: 'Product-3', price: 35, count: 0.75},
        {name: 'Product-4', price: 25.75, count: 1.2},
        {name: 'Product-5', price: 15, count: 3.5},
      ],
    };
  }

  componentDidMount() {
    const products = [...this.state.products];
    const newProducts = products.map(item => {
      item.price = Number(item.price).toFixed(2);
      item.count = Number(item.count).toFixed(3);
      item.total = item.price * item.count;
      item.total = Number(item.total).toFixed(2);
      return item;
    });
    this.setState({
      products: newProducts
    })
  }

  deleteProduct = (id) => {
    const products = [...this.state.products];
    products.splice(id, 1);

    this.setState({
      products
    })
  };


  render() {
    const {products} = this.state;
    let totals = products.map((item, index) => {
      return +item.total || 0;
    }).reduce((a, b) => a + b);
    console.log(totals);

    const productsTable = products.map((item, index) => {
      return <Product
          key={index}
          id={index}
          total={item.total}
          name={item.name}
          price={item.price}
          count={item.count }
          deleteProduct={this.deleteProduct}
      />
    });
    return (
        <div className="app">
          <table>
            <thead>
            <tr>
              <th>Название</th>
              <th>Цена</th>
              <th>Количество</th>
              <th>Сумма</th>
              <th>Button</th>
            </tr>
            </thead>
            <tbody>
            {productsTable}
            </tbody>
          </table>
          <TotalBlock totals={totals} />
        </div>
    );
  }

}

export default Task_h_8_2;
