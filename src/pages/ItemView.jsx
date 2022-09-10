import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../components/itemDetail/ItemDetail'
import db from '../services'
import { doc, getDoc } from 'firebase/firestore'

const ItemView = () => {
  const params = useParams()

  const [product, setProduct] = useState([])
  useEffect(() => {
    const getProductData = async () => {
      const docRef = doc(db, "products", params.id);
      const docSnap = await getDoc(docRef);
      setProduct({ id: docSnap.id, ...docSnap.data()})
    }
    if (product.length < 1 ) {
      getProductData()
    }
    
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