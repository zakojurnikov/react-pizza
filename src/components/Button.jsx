import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ onClick, children, cart, outline, add, goBack, pay }) => {
	return (
		<button onClick={onClick} className={classNames(
			'button',
			{
				'button--cart': cart,
			},
			{
				'button--outline': outline,
			},
			{
				'button--add': add,
			},
			{
				'go-back-btn': goBack,
			},
			{
				'pay-btn': pay,
			}
		)}>
			{children}
		</button>
	);
}

Button.propTypes = {
	onClick: PropTypes.func,
}



export default Button;