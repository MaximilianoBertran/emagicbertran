import React, { useContext, useState} from 'react'
import { GlobalContext } from '../../../context/GlobalProvider';

const ItemCount = (props) => {
    const {product} = props;
    const [count, setCount] = useState(product.initial ?? 0);
    const {addProduct, findCartById} = useContext (GlobalContext)

    const less = () => {
        if (count-1 >= 0) {
            setCount(count - 1)
        }
    }

    const add = () => {
        if (count+1 <= product.stock) {
            setCount(count + 1)
        }
    }

    return (
        <div className='itemCount'>
            <div className="row justify-content-start border border-2 border-secondary rounded w-auto">
                <button type="button" onClick={ () => less()} className={ count-1 >= 0 ? "btn btn-outline-secondary border-0 rounded-0 col-4" : "btn btn-outline-secondary border-0 rounded-0 col-4 disabled"}>-</button>
                <div className="col-4 d-flex justify-content-center align-items-center">{count}</div>
                <button type="button" onClick={ () => add()} className={ count+1 + findCartById(product.id) <= product.stock ? "btn btn-outline-secondary border-0 rounded-0 col-4" : "btn btn-outline-secondary border-0 rounded-0 col-4 disabled"}>+</button>
            </div>
            <div className="row d-grid gap-2">
                <button type="button" onClick={ () => addProduct(product, count) } className={ count > 0 ? "btn btn-primary" : "btn btn-primary disabled"}>Agregar a carrito</button>
            </div>
        </div>
    )
}

export default ItemCount