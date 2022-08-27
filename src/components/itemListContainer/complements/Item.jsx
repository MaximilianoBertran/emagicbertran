import React from 'react'
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount'

const Item = (props) => {
  const onAdd = () => {
    console.log("Felicidades por agrega " + props.name + " al carrito");
  }
  return (
    
    <div className="card m-2" style={{ width:"300px"}}>
        <Link to={`/item-detail/${props.id}`}>
          <img src={props.img} className="card-img-top" alt={props.name} />
        </Link>
        <div className="card-body">
            <h5 className="card-title text-center">{props.name}</h5>
            <p className="card-text">{props.description}</p>
        </div>
        
        <div className="card-footer">
            <ItemCount stock={props.stock} initial={props.initial} name={props.name} onAdd={ onAdd } />
        </div>
    </div>
  )
}

export default Item