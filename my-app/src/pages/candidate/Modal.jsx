import React from 'react'
import './Modal.css'

const Modal = ({modal, setModal, showModal}) => {

    if (modal == false) {
        return null
    }

    

  return (
    <div className='modal' onClick={showModal}>
        <div className="modal-contain">
            <form onSubmit={(e) => {e.preventDefault()}}
                onClick={(e) => {
                    e.stopPropagation()
                }}
            >
                <div className="in">
                    <label htmlFor="dom">Domain:</label>
                    <input type="text" name='dom' />
                </div>
                <div className="in">
                    <label htmlFor="descr">Description:</label>
                    <input type="text" name='descr' />
                </div>
                <button className='button'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Modal