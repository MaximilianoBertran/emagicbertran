import React, { Fragment, useContext } from 'react'
import { useState } from 'react';
import Modal from 'react-modal'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalProvider';
import PriceDetail from '../itemDetail/complements/PriceDetail';
import PriceFormat from '../itemListContainer/complements/PriceFormat';
import RowTable from './complements/RowTable';

const CartTable = () => {
  const {cart,totalAmount,clearCart} = useContext(GlobalContext)
  const [isOpenPayment, setIsOpenPayment] = useState(false)
  const [isOpenCongratulations, setIsOpenCongratulations] = useState(false)

  const openModalPayment = () => {
    setIsOpenPayment(true);
  }

  const closeModalPayment = () => {
    setIsOpenPayment(false);
  }

  const closeModalPaymentPay = () => {
    setIsOpenPayment(false);
    clearCart()
    setIsOpenCongratulations(true)
  }

  return (
    <div>
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
            <Fragment key={index}>
              <RowTable item={item} index={index}/>
            </Fragment>
          ))
        :
          <tr>
            <td colSpan="7">You don't have any items in the cart.</td>
          </tr>
        }
      </tbody>
      { totalAmount() > 0 &&
        <tfoot>
          <tr>
            <th colSpan="5"></th>
            <td> <PriceFormat price={totalAmount()} /></td>
            <td> 
              <button onClick={ openModalPayment } className="btn btn-primary mx-1" style={{ width: "100px"}}>Buy</button>
              <button onClick={ clearCart } className="btn btn-danger mx-1" style={{ width: "100px"}}>Clear</button>
            </td>
          </tr>
        </tfoot>
      }
    </table>
    <Modal className="Modal" isOpen={isOpenPayment} contentLabel="Congratulations" appElement={document.getElementById('root')}>
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title">Payment options</h4>
                <button type="button" className="btn-close" onClick={closeModalPayment} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <PriceDetail price={totalAmount()} />
            </div>
            <div className="modal-footer" style={{backgroundColor: "#dee2e6"}}>
                <button type="button" onClick={closeModalPaymentPay} className="btn btn-primary" style={{ width: "100px"}}>Pay</button>
                <button type="button" onClick={closeModalPayment} className="btn btn-secondary" style={{ width: "100px"}}>Cancel</button>
            </div>
            </div>
        </div>
    </Modal>
    <Modal className="Modal" isOpen={isOpenCongratulations} contentLabel="Congratulations" appElement={document.getElementById('root')}>
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title">Congratulations!</h4>
                <Link type="button" className="btn-close" to="/" aria-label="Close"></Link>
            </div>
            <div className="modal-body">
              <p>Your products will be deposited in the trunk of your account within the next 24 hours and you will be able to access them from any character linked to the account.</p>
            </div>
            <div className="modal-footer" style={{backgroundColor: "#dee2e6"}}>
                <Link type="button" to="/" className="btn btn-primary" style={{ width: "100px"}}> Accept </Link>
            </div>
            </div>
        </div>
    </Modal>
    </div>
  )
}

export default CartTable