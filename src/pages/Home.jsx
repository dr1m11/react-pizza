import React, {useEffect, useState} from 'react';
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock";

const Home = () => {

    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [categoryId, setCategoryId] = useState(0)
    const [sortType, setSortType] = useState(0)


    useEffect(() => {
        fetch('https://654798f6902874dff3ac8749.mockapi.io/pizzas').then(res => {
            return res.json()
        }).then(json => {
            setItems(json)
            setIsLoading(false)
        })
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="container">
                <div className="content__top">
                    <Categories value={categoryId} onClickCategory={(id) => setCategoryId(id)}/>
                    <Sort/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {
                        isLoading
                            ? [...new Array(8)].map((_, index) => <Skeleton key={index}/>)
                            : items.map(obj =>
                                <PizzaBlock key={obj.id}
                                            title={obj.title}
                                            price={obj.price}
                                            imgUrl={obj.imageUrl}
                                            sizes={obj.sizes}
                                            types={obj.types}/>
                            )}
                </div>
            </div>

        </>
    );
};

export default Home;