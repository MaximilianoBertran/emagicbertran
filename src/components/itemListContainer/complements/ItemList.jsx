import React from 'react'
import Item from './Item';

const ItemList = (props) => {
    const products = props.category ? props.products.filter((item) => item.categories.includes(props.category)) : props.products
    return (
        <div className="d-flex flex-wrap justify-content-center">
            {
                products.map((item, index) => 
                    (
                        <Item key={index} id={item.id} name={item.name} description={item.description}img={item.img} stock={item.stock} initial={item.initial ?? 0} />
                    )
                )
            }
        </div>
    )
}

export default ItemList