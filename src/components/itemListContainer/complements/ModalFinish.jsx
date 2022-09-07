import React, { useContext } from 'react'
import Modal from 'react-modal'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../../context/GlobalProvider';
import '../css/Modal.css'

const ModalFinish = () => {
    
    const {modalStatus, setModalStatus} = useContext(GlobalContext)

    const closeModal = () => {
        setModalStatus(false);
    }

    return (
        <Modal className="Modal" isOpen={modalStatus} contentLabel="Congratulations" appElement={document.getElementById('root')}>
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h6 className="modal-title">{`Congratulations! The product added to Cart`}</h6>
                    <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
                </div>
                <div className="modal-footer" style={{backgroundColor: "#dee2e6"}}>
                    <Link type="button" to="/" onClick={closeModal} className="btn btn-secondary">Continue</Link>
                    <Link type="button" to="/cart" onClick={closeModal} className="btn btn-primary">Go to Cart</Link>
                </div>
                </div>
            </div>
        </Modal>
    )
}

export default ModalFinish