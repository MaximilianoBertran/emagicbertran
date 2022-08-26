import React, { useState} from 'react'

const ItemCount = (props) => {
    const {stock} = props;
    const [count, setCount] = useState(props.initial ?? 0);
    function less() {
        if (count-1 >= 0) {
            setCount(count - 1)
        }
    }

    function add() {
        if (count+1 <= stock) {
            setCount(count + 1)
        }
    }

    return (
        <div>
            <div className="row justify-content-start border border-2 border-secondary rounded w-auto">
                <button type="button" onClick={ () => less()} className={ count-1 >= 0 ? "btn btn-outline-secondary border-0 rounded-0 col-4" : "btn btn-outline-secondary border-0 rounded-0 col-4 disabled"}>-</button>
                <div className="col-4 d-flex justify-content-center align-items-center">{count}</div>
                <button type="button" onClick={ () => add()} className={ count+1 <= stock ? "btn btn-outline-secondary border-0 rounded-0 col-4" : "btn btn-outline-secondary border-0 rounded-0 col-4 disabled"}>+</button>
            </div>
            <div className="row d-grid gap-2">
                <button type="button" onClick={ props.onAdd } className={ count > 0 ? "btn btn-primary" : "btn btn-primary disabled"}>Agregar a carrito</button>
            </div>
        </div>
    )
}

export default ItemCount