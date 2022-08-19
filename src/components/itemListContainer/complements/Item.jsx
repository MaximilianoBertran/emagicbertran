import React from 'react'
import ItemCount from './ItemCount'

const Item = (props) => {
  const onAdd = () => {
    console.log("Felicidades por agrega " + props.name + " al carrito");
  }
  return (
    <div className="card m-2" style={{ width:"300px"}}>
        <img src={props.img} className="card-img-top" alt={props.name} />
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.description}</p>
        </div>
        <div className="card-footer">
            <ItemCount stock={props.stock} initial={props.initial} name={props.name} onAdd={ onAdd } />
        </div>
    </div>
  )
}

export default Item