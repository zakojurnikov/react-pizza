import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCategory, setSortBy } from '../redux/actions/filters';

import { Categories, SortPopup, PizzaBlock, PizzzaLoadingBlock } from '../components';

const categoryNames = [
	'Мясные',
	'Вегетарианская',
	'Гриль',
	'Острые',
	'Закрытые'
];

const sortItems = [
	{ name: 'популярности', type: 'rating' },
	{ name: 'цене', type: 'price' },
	{ name: 'алфавиту', type: 'name' },
];

const Home = () => {
	const store = useSelector(({ pizzas }) => pizzas.items);
	const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
	const { category, sortBy } = useSelector(({ filters }) => filters);
	const dispatch = useDispatch();

	const onSelectItem = React.useCallback((index) => {
		dispatch(setCategory(index));
	}, [dispatch]);

	const onSelectSortType = React.useCallback((name) => {
		dispatch(setSortBy(name));
	}, [dispatch]);

	return (
		<div className="container">
			<div className="content__top">
				<Categories
					activeCategory={category}
					onClickCategory={onSelectItem}
					items={categoryNames}
				/>
				<SortPopup activeSortType={sortBy} items={sortItems} onClickSortType={onSelectSortType} />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{isLoaded
					? store.map((item) => <PizzaBlock key={item.id} {...item} />)
					: Array(10)
						.fill(0)
						.map((_, index) => <PizzzaLoadingBlock key={index} />)
				}
			</div>
		</div>
	)
}

export default Home;
