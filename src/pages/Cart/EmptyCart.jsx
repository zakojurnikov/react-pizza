import React from 'react';
import { NavLink } from 'react-router-dom';

import emptyCartImg from '../../assets/img/empty-cart.png';

const EmptyCart = () => {
	return (
		<div className="container container--cart">
			<div className="cart cart--empty">
				<h2>Корзина пустая</h2>
				<p>
					Вероятней всего, вы не заказывали ещё пиццу.<br />
					Для того, чтобы заказать пиццу, перейди на главную страницу.
				</p>
				<div className="img-wrapper">
					<img src={emptyCartImg} alt="Empty cart" />
				</div>
				<NavLink to="/" activeClassName="button button--black">
					<span>Вернуться назад</span>
				</NavLink>
			</div>
		</div>
	)
}

export default EmptyCart;
