import React from 'react'
import gold from '../../../img/GoldCoin.png';
import silver from '../../../img/SilverCoin.png';
import bronze from '../../../img/BronzeCoin.png';

const PriceFormat = (props) => {
    const price = parseFloat(props.price).toFixed(2)
    const decimals = parseFloat(price % 1).toFixed(2)
  return (
    <p className="mb-0 text-center">
        <strong>
            <img src={gold} alt="" height="20" className="me-1 mx-1"/>
            {parseFloat(price).toFixed(0)}
            <img src={silver} alt="" height="20" className="me-1 mx-1"/>
            {parseFloat(decimals*10).toFixed(0)}
            <img src={bronze} alt="" height="20" className="me-1 mx-1"/>
            {Math.round(((decimals*10) % 1) *10)}
        </strong>
    </p>
  )
}

export default PriceFormat