import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Button } from '../';
import { useDispatch } from 'react-redux';
import { addPizzaCart, updateGlobalDates } from '../../redux/actions/cart';

const PizzaBlock = ({ id, imageUrl, name, types, sizes, price }) => {
	const [activeType, setActiveType] = useState(types[0]);
	const [activeSize, setActiveSize] = useState(0);

	const aviableTypes = ['тонкое', 'традиционное'];
	const aviableSizes = [26, 30, 40];

	const dispatch = useDispatch();

	const PizzaForCart = {
		id,
		name,
		imageUrl,
		price,
		type: aviableTypes[activeType],
		size: aviableSizes[activeSize],
		count: 1,
	}

	const addPizzaToCart = () => {
		dispatch(addPizzaCart(PizzaForCart));
		dispatch(updateGlobalDates());
	};

	return (
		<div className="pizza-block">
			<img
				className="pizza-block__image"
				src={imageUrl}
				alt="Pizza"
			/>
			<h4 className="pizza-block__title">{name}</h4>
			<div className="pizza-block__selector">
				<ul>
					{aviableTypes && aviableTypes.map((name, index) => (
						<li
							key={index}
							onClick={() => setActiveType(index)}
							className={classNames({
								'active': activeType === index,
								'disabled': !types.includes(index),
							})}>{name}</li>
					))}
				</ul>
				<ul>
					{sizes && sizes.map((name, index) => (
						<li
							key={index}
							onClick={() => setActiveSize(index)}
							className={classNames({
								'active': sizes[activeSize] === name,
								'disabled': !sizes.includes(name),
							})}>{name} см.</li>
					))}
				</ul>
			</div>
			<div className="pizza-block__bottom">
				<div className="pizza-block__price">от {price} ₽</div>
				<Button onClick={addPizzaToCart} outline add>
					<svg
						width="12"
						height="12"
						viewBox="0 0 12 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
							fill="white"
						/>
					</svg>
					<span>Добавить</span>
				</Button>
			</div>
		</div >
	)
}

PizzaBlock.propTypes = {
	id: PropTypes.number,
	imageUrl: PropTypes.string,
	name: PropTypes.string,
	types: PropTypes.arrayOf(PropTypes.number),
	sizes: PropTypes.arrayOf(PropTypes.number),
	price: PropTypes.number,
	category: PropTypes.number,
	rating: PropTypes.number,
};

PizzaBlock.defaultProps = {
	name: '---',
	types: [],
	sizes: [],
	price: 0,
}

export default PizzaBlock;

