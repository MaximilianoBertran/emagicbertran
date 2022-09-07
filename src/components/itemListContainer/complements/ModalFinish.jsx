import React from 'react'
import Modal from 'react-modal'
import { Link } from 'react-router-dom';
import '../css/Modal.css'

const ModalFinish = () => {
    const [modalIsOpen, setIsOpen] = React.useState(true);

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <Modal className="Modal" isOpen={modalIsOpen} contentLabel="Congratulations" appElement={document.getElementById('root')}>
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h6 className="modal-title">{`Congratulations! The product added to Cart`}</h6>
                    <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
                </div>
                <div className="modal-footer" style={{backgroundColor: "#dee2e6"}}>
                    <Link type="button" to="/" onClick={closeModal} className="btn btn-secondary">Continue</Link>
                    <Link type="button" to="/cart" className="btn btn-primary">Go to Cart</Link>
                </div>
                </div>
            </div>
        </Modal>
    )
}

export default ModalFinish