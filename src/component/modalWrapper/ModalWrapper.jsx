import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { setModalShow } from '../../features/system/systemSlice'

const ModalWrapper = (props) => {
    const {modalShow, modalContent} = useSelector((state)=> state.systemInfo)
    const dispatch = useDispatch();
  return (
    <div>
         <Modal
      show={modalShow}
      onHide={()=> dispatch(setModalShow(false))}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {modalContent.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
            {modalContent.content}
      </Modal.Body>
    </Modal>
    </div>
  )
}

export default ModalWrapper