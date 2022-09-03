import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../components/products.json'
import ItemDetail from '../components/itemDetail/ItemDetail'

const ItemView = () => {
  const params = useParams()

  const [product, setProduct] = useState([])
  useEffect(() => {
    new Promise( (resolve, reject) => {
      setTimeout(()=> {
        resolve(data.products.find((item) => item.id === Number(params.id)))
      }, 2000)
    }).then ( result => setProduct(result))
  })

  return (
    <div className="container w-75 pt-4 d-flex flex-wrap justify-content-center">
      {
        product.id ? 
        <ItemDetail product={product}/> 
        : 
        <div className="d-flex justify-content-center mt-5">
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      }
    </div>
  )
}

export default ItemView