import React, { useContext } from 'react'
import './css/ItemDetail.css'
import ItemCount from '../itemListContainer/complements/ItemCount'
import PriceDetail from './complements/PriceDetail';
import ModalFinish from '../itemListContainer/complements/ModalFinish';
import { GlobalContext } from '../../context/GlobalProvider';

const ItemDetail = (props) => {

  const {modalStatus} = useContext (GlobalContext)

  return (
      <div className="detail row row-cols-1 row-cols-md-2 border border-dark rounded mb-2 ">
        <div className="col col-md-7 text-center">
          <h2>{props.product.name}</h2>
          <img className="w-50" src={props.product.img} alt={props.product.name} />
          <hr />
          <p className="">{props.product.extension}</p>
        </div>
        <div className="col col-md-5" style={{backgroundColor: "#dee2e6"}}>
          <h5 className='text-center mt-1'>
            Opciones de pago
          </h5>
          <div className='row mb-4'>
            <PriceDetail price={props.product.price}/>
          </div>
          <div className='text-left text-dark' style={{fontSize: "11px"}}>
            * Si elige abonar en cuotas, el oro sera descontado por dia de su cuenta. <br />
            ** En caso de no tener saldo recibira un status negativo de moroso hasta abonar la deuda.
          </div>
          <div className='row bg-light'>{modalStatus}
            <ItemCount product={props.product} />
          </div>
        </div>
        <ModalFinish />
      </div>
  )
}

export default ItemDetail