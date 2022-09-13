import React, { useContext } from 'react'
import { useState } from 'react'
import PriceFormat from '../../itemListContainer/complements/PriceFormat'
import { GlobalContext } from '../../../context/GlobalProvider'

const PriceDetail = (props) => {

  const {setQuote, setFinancial} = useContext(GlobalContext)
  const originalPrice = props.price
  
  const [ price, setPrice ] = useState(originalPrice)
  const [ quoteLocal , setQuoteLocal ] = useState(1)
  const inflation = 70

  const handleChange = (option) => {
    setQuoteLocal(option)

    if(option < 6) {
      setPrice(originalPrice)
    } else {
      setPrice(originalPrice + originalPrice * ((inflation * option / 12) / 100))
    }
    if(props.real){
      setQuote(option)
      setFinancial(originalPrice + originalPrice * ((inflation * option / 12) / 100))
    }
  }
  return (
    <div className='text-center mb-5 p-3' style={{ height: "180px" }}>
      <h2> <PriceFormat price={ price } /></h2>
      <h5> <p>{ quoteLocal } x </p><PriceFormat price={ parseFloat(price/quoteLocal).toFixed(2) } /> </h5>
      <label htmlFor="Quote">Cuotas</label>
      <select id="Quote" name="Quote" className='form-select form-select-sm' defaultValue={ '1' } onChange={ (option) => handleChange(option.target.value) }>
        <option value="1">1</option>
        <option value="3">3</option>
        <option value="6">6</option>
        <option value="9">9</option>
        <option value="12">12</option>
      </select>
    </div>
  )
}

export default PriceDetail