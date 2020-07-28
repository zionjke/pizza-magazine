import React,{useState} from "react";

const Categories = React.memo(({items,onClickCategory,activeCategory}) => {

    return (
        <div className="categories">
            <ul>
                <li onClick={ () => onClickCategory(null)}
                    className={`${activeCategory === null && 'active'}`}
                >
                    Все
                </li>
                {   items &&
                items.map((item,index) =>
                    <li className={`${activeCategory === index && 'active'}`}
                        onClick={ () => onClickCategory(index)}
                        key={`${item}_${index}`}
                    >
                        {item}
                    </li>
                )
                }
            </ul>
        </div>
    )
});

export default Categories