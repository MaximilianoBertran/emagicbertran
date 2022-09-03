import React from 'react'
import { useState } from 'react'
import PriceFormat from '../../itemListContainer/complements/PriceFormat'

const PriceDetail = (props) => {
  const originalPrice = props.price
  const [ price, setPrice ] = useState(originalPrice)
  const [ quote , setQuote ] = useState(1)
  const inflation = 70

  const handleChange = (option) => {
    setQuote(option)
    if(option < 6) {
      setPrice(originalPrice)
    } else {
      setPrice(originalPrice + originalPrice * ((inflation * option / 12) / 100))
    }
  }
  return (
    <div className='text-center mb-5 p-3' style={{ height: "180px" }}>
      <h2> <PriceFormat price={ price } /></h2>
      <h5> <p>{ quote } x </p><PriceFormat price={ parseFloat(price/quote).toFixed(2) } /> </h5>
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