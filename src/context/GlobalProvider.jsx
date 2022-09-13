import React, { useState } from 'react'
import { createContext } from 'react'
import db from '../services'
import { collection, addDoc, getDoc, doc } from 'firebase/firestore'

export const GlobalContext = createContext()

const GlobalProvider = ({children}) => {

  const appName =  'e-Magic'

  const [cart, setCart] = useState([])
  const [modalStatus, setModalStatus] = useState(false)
  const [quote, setQuote] = useState(1)
  const [financial, setFinancial] = useState(0)

  const itemCartCount = () => {
    return cart.map(item => item.cant).reduce((prev, curr) => prev + curr, 0)
  }

  const totalAmount = () =>{
    return cart.map(item => (item.cant * item.price)).reduce((prev, curr) => prev + curr, 0)
  }

  const addProduct = (product, count) => {
    const index = cart.findIndex(item => item.id === product.id)
    if(index >= 0){
      sumProduct(index, count)
    } else {
      product.cant = count
      setCart([...cart, product])
    }
  }

  const sumProduct = (index, count = 1) => {
    const product = cart[index]
    product.cant += count
    cart.splice(index, 1)
    setCart([...cart, product])
  }

  const lessProduct = (index) => {
    const product = cart[index]
    product.cant -= 1
    cart.splice(index, 1)
    setCart([...cart, product])
  }

  const deleteProduct = (index) => {
    setCart(cart.filter((item, itemIndex) => {
      return itemIndex !== index 
    }))
  }

  const clearCart = () => {
    setCart([])
  }

  const findCartById = (id) => {
    let product = cart.find((item) => item.id === id)
    return product ? product.cant : 0
  }

  const finishOperation = async (form) => {
    const col = collection(db, "orders")
    const order = await addDoc(col, {...form, total: quote > 3 ? financial : totalAmount(), items: cart, quote: quote})
    if(order.id){
      cart.forEach(async (item) => {
        const docRef = doc(db, "products", item.id);
        const docSnap = await getDoc(docRef);
        await db.collection('products').doc(item.id).update({ stock: (docSnap.data().stock - item.cant) })
      })
      return order.id    
    } else {
      return false
    }     
  }

  return (
    <GlobalContext.Provider value={{
      appName,
      cart,
      modalStatus,
      quote,
      financial,
      setFinancial,
      setQuote,
      setCart,
      setModalStatus,
      itemCartCount,
      totalAmount,
      addProduct,
      sumProduct,
      lessProduct,
      deleteProduct,
      clearCart,
      findCartById,
      finishOperation
    }}>
      { children }
    </GlobalContext.Provider>
  )
}

export default GlobalProvider