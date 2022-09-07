import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './complements/ItemList'
import db from '../../services'
import { collection, getDocs } from 'firebase/firestore'

const ItemListContainer = (props) => {
  const params = useParams()
  const [products, setProducts] = useState([])
  useEffect(() => {
    const getColData = async () => {
      const data = collection(db,"products")
      const col = await getDocs(data)
      setProducts(col.docs.map((doc) => doc = { id: doc.id, ...doc.data()}))
    }
    getColData()
  })
  
  return (
    <div className="w-100">
      { products.length < 1 ?
        <div className="d-flex justify-content-center mt-5">
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        :
        <ItemList category={params.category ?? null} products={products} />
      }
    </div>
  )
}

export default ItemListContainer