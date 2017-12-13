import React from 'react';

const TotalSum = (props) => {
  const {products} = props;
	const sumArray = products.map(product=>{
		return parseInt(product.total);
	});
	var sum = sumArray.reduce((a, b) => a + b, 0);
	console.log(sumArray);

  return (
      <div>{sum}</div>
  );
};

export default TotalSum;