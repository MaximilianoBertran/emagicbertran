import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalProvider';
import PriceFormat from '../itemListContainer/complements/PriceFormat';
import RowTable from './complements/RowTable';

const CartTable = () => {
  const {cart,totalAmount,clearCart} = useContext(GlobalContext)
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
          cart.sort((a, b) => a.id - b.id).map((item, index) => (
            <RowTable item={item} index={index}/>
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
            <td> <PriceFormat price={totalAmount()} /></td>
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