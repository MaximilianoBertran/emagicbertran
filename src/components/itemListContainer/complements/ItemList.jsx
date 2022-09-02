import React from 'react'
import Item from './Item';

const ItemList = (props) => {
    const products = props.category ? props.products.filter((item) => item.categories.includes(props.category)) : props.products
    return (
        <div className="d-flex flex-wrap justify-content-center">
            {
                products.map((item, index) => 
                    (
                        <Item key={index} product={item} />
                    )
                )
            }
        </div>
    )
}

export default ItemList