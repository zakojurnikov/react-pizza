export const addPizzaCart = (pizzaObj) => ({
	type: 'ADD_PIZZA_CART',
	payload: pizzaObj,
});

export const removePizzaCart = (pizzaObj) => ({
	type: 'REMOVE_PIZZA_CART',
	payload: pizzaObj,
});

export const cleanCart = () => ({
	type: 'CLEAN_CART',
});

export const updateGlobalDates = () => ({
	type: 'UPDATE_GLOBAL_DATES',
});

export const incPizzaCount = (index, count = 1) => ({
	type: 'INC_PIZZA_COUNT',
	payload: {
		index,
		count,
	},
});

export const decPizzaCount = (index, count = 1) => ({
	type: 'DEC_PIZZA_COUNT',
	payload: {
		index,
		count,
	},
});

