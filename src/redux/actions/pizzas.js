export const setLoaded = (payload) => ({
	type: 'SET_LOADED',
	payload,
})

export const fetchPizzas = (category, sortBy) => (dispatch) => {
	dispatch(setLoaded(false));

	fetch(`http://localhost:3001/pizzas?
		${category != null ? `category=${category}` : ''}
		&_sort=${sortBy}
		&_order=${sortBy === 'name' ? 'asc' : 'desc'}
	`)
		.then((resp) => resp.json())
		.then(json => {
			dispatch(setPizzas(json));
		})
}

export const setPizzas = (items) => ({
	type: 'SET_PIZZAS',
	payload: items,
});