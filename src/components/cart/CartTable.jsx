import React, { Fragment, useContext, useState } from 'react'
import { GlobalContext } from '../../context/GlobalProvider';
import { UserContext } from '../../context/UserProvider';
import Modal from 'react-modal'
import { Link } from 'react-router-dom'
import PriceDetail from '../itemDetail/complements/PriceDetail';
import CartForm from './complements/CartForm';
import CardCart from './complements/CardCart';
import EmptyCart from './complements/EmptyCart';

const CartTable = () => {
  let orderId = null
  const {cart,totalAmount,clearCart, finishOperation} = useContext(GlobalContext)
  const {user} = useContext(UserContext)
  const [isOpenCongratulations, setIsOpenCongratulations] = useState(false)
  const [isOpenPayment, setIsOpenPayment] = useState(false)
  const [message, setMessage] = useState("")
  const [cartForm, setCartForm] = useState({
    buyer: {},
    total: totalAmount,
    items: cart
  })
  
  const closeModalPayment = () => {
    setIsOpenPayment(false);
  }

  const closeModalPaymentPay = async () => {
    orderId = await finishOperation(cartForm)
    if(orderId){
      clearCart()
      setMessage(`Order ID ${orderId}.`)
    } else {
      setMessage(`The order can't be generate.`)
    }
    setIsOpenPayment(false)
    setIsOpenCongratulations(true)
  }

  return (
    <div className='container mt-5'>
      { cart.length > 0 ?
        <div className='row'>
          <div className='col-lg-6  col-sm-12'>
            {
              cart.sort((a, b) => a.name.localeCompare(b.name)).map((item, index) => (
                <Fragment key={index}>
                  <CardCart item={item} index={index}/>
                </Fragment>
              ))
            }
          </div>
          <div className='col-lg-6  col-sm-12'>
            <div className='cartW'>
              { user.id ?
                <CartForm setIsOpenPayment= { setIsOpenPayment } cartForm={ cartForm } setCartForm={ setCartForm }/>
              :
                <div className='mb-4 p-3 text-center border rounded'> 
                  <p>Please log in to continue.</p>
                  <Link type="button" to="/login" className="btn btn-outline-dark me-2">Login</Link>
                  <p>If you don't have account, please register.</p>
                  <Link type="button" to="/register" className="btn btn-outline-dark me-2">Register</Link>
                </div>
              }
            </div>
          </div>
        </div>
      :
        <EmptyCart />
      }
      <Modal className="Modal" isOpen={isOpenPayment} contentLabel="Congratulations" appElement={document.getElementById('root')}>
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title">Payment options</h4>
                <button type="button" className="btn-close" onClick={closeModalPayment} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <PriceDetail price={totalAmount()} real={true} />
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
                <h4 className="modal-title">{orderId !== false ? "Congratulations!":"We fail..."}</h4>
                <Link type="button" className="btn-close" to="/market" aria-label="Close"></Link>
            </div>
            <div className="modal-body">
              <p>{message} <br/>{orderId !== false && "Your products will be deposited in the trunk of your account within the next 24 hours and you will be able to access them from any character linked to the account."}</p>
            </div>
            <div className="modal-footer" style={{backgroundColor: "#dee2e6"}}>
                <Link type="button" to="/market" className="btn btn-primary" style={{ width: "100px"}}> Accept </Link>
            </div>
            </div>
        </div>
      </Modal>
    </div>
  )
}

export default CartTable