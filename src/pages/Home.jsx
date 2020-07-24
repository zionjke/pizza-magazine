import React from "react";
import {Categories, PizzaBlock, SortPopup} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../redux/actions/filters";

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
    {name: 'популярности', type: 'popular'},
    {name: 'цене', type: 'price'},
    {name: 'алфавит', type: 'alphabet'},
];


const Home = () => {
    const dispatch = useDispatch();
    // const items = useSelector((state) => state.pizzas.items);
    const items = useSelector(({pizzas}) => pizzas.items);
    // const catIndex = useSelector(({filters}) => filters.category);

    const onSelectCategory = React.useCallback((catIndex) => {
        dispatch(setCategory(catIndex))
    }, []);


    return (
        <div className="container">
            <div className="content__top">
                <Categories onClickItem={(catIndex) => onSelectCategory(catIndex)}
                            items={categoryNames}/>
                <SortPopup items={sortItems}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {items &&
                items.map((item) => <PizzaBlock key={item.id} {...item}/>)
                }
            </div>
        </div>
    )
};

export default Home