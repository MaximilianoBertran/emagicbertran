import React from 'react'
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount'
import PriceFormat from './PriceFormat';

const Item = (props) => {
  return (
    
    <div className="card m-2" style={{ width:"300px"}}>
        <Link to={`/item-detail/${props.product.id}`}>
          <img src={props.product.img} className="card-img-top" alt={props.product.name} />
        </Link>
        <div className="card-body">
            <h5 className="card-title text-center">{props.product.name}</h5>
            <p className="card-text">{props.product.description}</p>
            <PriceFormat price={props.product.price}/>
        </div>
        
        <div className="card-footer">
            <ItemCount product={props.product} />
        </div>
    </div>
  )
}

export default Item