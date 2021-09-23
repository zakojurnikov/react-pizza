import React from 'react';
import { useSelector } from 'react-redux';

import { EmptyCart, FullCart } from './../index';

const Cart = () => {
	const pizzas = useSelector(({ cart }) => cart.items);

	return (
		<div>
			{pizzas.length
				? <FullCart />
				: <EmptyCart />
			}
		</div>
	)
}

export default Cart;
