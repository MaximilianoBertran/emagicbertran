import React from 'react'
import './css/ItemDetail.css'
import ItemCount from '../itemListContainer/complements/ItemCount'
import PriceDetail from './complements/PriceDetail';

const ItemDetail = (props) => {

  const onAdd = () => {
    console.log("Felicidades por agrega " + props.product.name + " al carrito");
  }
  return (
      <div className="detail row row-cols-1 row-cols-md-2 border border-dark rounded mb-2 ">
        <div className="col col-md-7 text-center">
          <h2>{props.product.name}</h2>
          <img className="w-50" src={props.product.img} alt={props.product.name} />
          <hr />
          <p className="">{props.product.extension}</p>
        </div>
        <div className="col col-md-5" style={{backgroundColor: "#dee2e6"}}>
          <h3 className='text-center mt-1'>
            Opciones de pago
          </h3>
          <div className='row'>
            <PriceDetail price={props.product.price}/>
          </div>

          <p className='text-left text-dark' style={{fontSize: "11px"}}>
            * Si elige abonar en cuotas, el oro sera descontado por dia de su cuenta. <br />
            ** En caso de no tener saldo recibira un status negativo de moroso hasta abonar la deuda. 
          </p>
          <div className='row bg-light'>
            <ItemCount stock={props.product.stock} initial={props.product.initial} name={props.product.name} onAdd={ onAdd } />
          </div>
        </div>
      </div>
  )
}

export default ItemDetail