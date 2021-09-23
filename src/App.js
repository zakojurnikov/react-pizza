import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPizzas } from './redux/actions/pizzas';

import { Header } from './components';
import { Home, Cart } from './pages';


function App() {
	const dispatch = useDispatch();
	const { category, sortBy } = useSelector(({ filters }) => filters);

	useEffect(() => {
		dispatch(fetchPizzas(category, sortBy));
	}, [dispatch, category, sortBy]);

	return (
		<div className="wrapper">
			<Header />
			<div className="content">
				<Route exact path="/" component={Home} />
				<Route exact path="/cart" component={Cart} />
			</div>
		</div>
	);
}

export default App;
