import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import CaptchaTest from './CaptchaTest';
import TextCaptcha from './TextCaptcha'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const MainModal = () => {

    const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>

    <div>
        <div className='text-center'>
            <Button color="info" onClick={toggle}>
                Click Me
            </Button>
        </div>
        <Modal isOpen={modal} toggle={toggle}
        centered={true}
        backdrop={true}>
            {/* <ModalHeader toggle={toggle}>Modal title</ModalHeader> */}
            <ModalBody>
            <CaptchaTest/>
            </ModalBody>
        </Modal>
    </div>
      
    </>
  )
}

export default MainModal