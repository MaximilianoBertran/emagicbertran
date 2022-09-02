import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './complements/ItemList'
import data from '../products.json'

const ItemListContainer = (props) => {
  const params = useParams()

  const [products, setProducts] = useState([])
  useEffect(() => {
    new Promise( (resolve, reject) => {
      setTimeout(()=> {resolve(data.products)}, 2000)
    }).then ( result => setProducts(result))
  })
  
  return (
    <div className="w-100">
      <ItemList category={params.category ?? null} products={products} />
    </div>
  )
}

export default ItemListContainer