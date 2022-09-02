import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalProvider';

const CartTable = () => {
  const {cart,lessProduct,deleteProduct,sumProduct,totalAmount,clearCart} = useContext(GlobalContext)

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Amount</th>
          <th scope="col">Count</th>
          <th scope="col">Subtotal</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        { cart.length > 0 ? 
          cart.map((item, index) => (
            <tr key={index}>
              <th scope="row">{ index }</th>
              <td> { item.name } </td>
              <td> { item.description } </td>
              <td> $ { item.price } </td>
              <td> { item.cant } </td>
              <td> $ { item.price * item.cant } </td>
              <td>
                <button onClick={ () => lessProduct(index) } className="btn btn-secondary mx-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-dash" viewBox="0 0 16 16">
                    <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z"/>
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                  </svg>
                </button>
                <button onClick={ () => sumProduct(index) } className="btn btn-secondary mx-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                    <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                  </svg>
                </button>
                <button onClick={ () => deleteProduct(index) } className="btn btn-danger mx-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
                </button>
              </td>
            </tr>
          ))
        :
          <tr>
            <td colSpan="7">You don't have any items in the cart.</td>
          </tr>
        }
      </tbody>
      { totalAmount() > 0 ?
        <tfoot>
          <tr>
            <th colSpan="5"></th>
            <td> $ { totalAmount() } </td>
            <td> 
              <button onClick={ clearCart } className="btn btn-primary mx-1 w-25">Buy</button>
              <button onClick={ clearCart } className="btn btn-danger mx-1 w-25">Clear</button>
            </td>
          </tr>
        </tfoot>
        : ""
      }
    </table>
  )
}

export default CartTable