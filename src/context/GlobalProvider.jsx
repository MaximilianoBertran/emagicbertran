import React, { useState } from 'react'
import { createContext } from 'react'

export const GlobalContext = createContext()

const GlobalProvider = ({children}) => {

  const [cart, setCart] = useState([])

  const itemCartCount = () => {
    return cart.map(item => item.cant).reduce((prev, curr) => prev + curr, 0);
  }

  const totalAmount = () =>{
    return cart.map(item => (item.cant * item.price)).reduce((prev, curr) => prev + curr, 0);
  }

  const addProduct = (product, count) => {
    const index = cart.findIndex(item => item.id === Number(product.id))
    if(index >= 0){
      let array = cart
      array[index].cant += 1 
      setCart(array)
    } else {
      product.cant = count
      setCart([...cart, product])
    }
  }

  const sumProduct = (index) => {
    let array = cart
    array[index].cant += 1 
    setCart(array)
  }

  const lessProduct = (index) => {
    let array = cart
    array[index].cant -= 1 
    setCart(array)
  }

  const deleteProduct = (index) => {
    setCart(cart.splice(index))
    console.log(cart)
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
      setCart,
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