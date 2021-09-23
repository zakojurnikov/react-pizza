const initialState = {
	items: [],
	totalPrice: 0,
	totalCount: 0,
}

const inArrayIndex = (obj, array) => {
	return array.findIndex((item) =>
		item.id === obj.id &&
		item.name === obj.name &&
		item.size === obj.size &&
		item.type === obj.type);
}

const cart = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_PIZZA_CART':
			const index = inArrayIndex(action.payload, state.items)
			if (index >= 0) {
				++state.items[index].count;
				return state;
			}
			if (index === -1) {
				return {
					...state,
					items: [
						...state.items,
						action.payload,
					]
				};
			}
			break;

		case 'REMOVE_PIZZA_CART':
			const indexPizza = inArrayIndex(action.payload, state.items)
			state.items.splice(indexPizza, 1);
			return state;

		case 'CLEAN_CART':
			return {
				...state,
				items: [],
			}

		case 'INC_PIZZA_COUNT':
			state.items[action.payload.index].count += action.payload.count;
			return state;

		case 'DEC_PIZZA_COUNT':
			if (state.items[action.payload.index].count === 0) return state;
			state.items[action.payload.index].count -= action.payload.count;
			return state;

		case 'UPDATE_GLOBAL_DATES':
			let countVar = 0;
			let priceVar = 0;
			if (state.items) {
				state.items.map((pizza) => {
					countVar += pizza.count;
					priceVar += pizza.count * pizza.price;
					return true;
				});
			}
			return {
				...state,
				totalPrice: priceVar,
				totalCount: countVar,
			};

		default:
			return state;
	}
}

export default cart;