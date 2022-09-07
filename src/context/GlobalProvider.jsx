import React, { useState } from 'react'
import { createContext } from 'react'

export const GlobalContext = createContext()

const GlobalProvider = ({children}) => {

  const [cart, setCart] = useState([])
  const [modalStatus, setModalStatus] = useState(false)

  const itemCartCount = () => {
    return cart.map(item => item.cant).reduce((prev, curr) => prev + curr, 0);
  }

  const totalAmount = () =>{
    return cart.map(item => (item.cant * item.price)).reduce((prev, curr) => prev + curr, 0);
  }

  const addProduct = (product, count) => {
    const index = cart.findIndex(item => item.id === Number(product.id))
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
    let product = cart.find((item) => item.id === Number(id))
    return product ? product.cant : 0
  }

  return (
    <GlobalContext.Provider value={{
      cart,
      modalStatus,
      setCart,
      setModalStatus,
      itemCartCount,
      totalAmount,
      addProduct,
      sumProduct,
      lessProduct,
      deleteProduct,
      clearCart,
      findCartById
    }}>
      { children }
    </GlobalContext.Provider>
  )
}

export default GlobalProvider