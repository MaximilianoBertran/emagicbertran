import React from 'react'
import Item from './Item';

const ItemList = (props) => {
    return (
        <div className="d-flex flex-wrap justify-content-start">
            {
                props.products.map((item, index) => 
                    (
                        <Item key={index} name={item.name} description={item.description}img={item.img} stock={item.stock} initial={item.initial ?? 0} />
                    )
                )
            }
        </div>
    )
}

export default ItemList