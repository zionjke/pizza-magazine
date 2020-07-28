import React, {useEffect} from "react";
import {Categories, PizzaBlock, SortPopup} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../redux/actions/filters";
import {getPizzas} from "../redux/reducers/pizzas";
import LoadingBlock from "../components/PizzaBlock/LoadingBlock";

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
    {name: 'популярности', type: 'popular',order:'desc'},
    {name: 'цене', type: 'price',order:'desc'},
    {name: 'алфавит', type: 'name',order:'asc'},
];

const Home = () => {
    const dispatch = useDispatch();
    const {isLoaded, items} = useSelector(({pizzas}) => pizzas);
    const {sortBy,category} = useSelector(({filters}) => filters);

    const onSelectCategory = React.useCallback((catIndex) => {
        dispatch(setCategory(catIndex))
    }, []);

    const onSelectSortType = React.useCallback((sortType) => {
        dispatch(setSortBy(sortType))
    }, []);



    useEffect(() => {
        dispatch(getPizzas(sortBy,category))
    }, [category,sortBy]);


    return (
        <div className="container">
            <div className="content__top">
                <Categories onClickCategory={(catIndex) => onSelectCategory(catIndex)}
                            activeCategory={category}
                            items={categoryNames}/>
                <SortPopup onClickSort={(sortType) => {onSelectSortType(sortType)}}
                           activeSortType={sortBy.type}
                           items={sortItems}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoaded
                        ? items.map((item) => <PizzaBlock key={item.id} {...item}/>)
                        : Array(12).fill(0).map((_, index) => <LoadingBlock key={index}/>)

                }
            </div>
        </div>
    )
};

export default Home