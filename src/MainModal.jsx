import React, { useState , useEffect} from 'react';
// import React, { Component } from 'react'
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import CaptchaTest from './CaptchaTest';
import TextCaptcha from './TextCaptcha'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const MainModal = (props) => {

    const [modal, setModal] = useState(false);
    const [istrueModal,setIsmodal] = useState(false);


  const toggle = () => setModal(!modal);

const isMatched = (data) => {
    console.warn(data);
    setIsmodal(data)
    if(data == true){
        // console.error("if")
        setModal(false)
    }else{
        // console.error('else')
        setModal(true)
    }
    props.Verification(data)
  }

  return (
    <>

    <div>
        <div className='text-center'>
            <Button color="info" onClick={toggle}>
                Verify
            </Button>
        </div>
        <Modal isOpen={modal} toggle={toggle}
        centered={true}
        backdrop={true}>
            <ModalHeader toggle={toggle}></ModalHeader>
            <ModalBody>
            <CaptchaTest isVerified={isMatched} />
            </ModalBody>
        </Modal>
        <h3 className='text-center text-success mt-2'>
        {
            istrueModal ? "Verified" : null
        }
        </h3>
    </div>
      
    </>
  )
}

export default MainModal





// export default class MainModal extends Component {

//     constructor(props){
//         super(props);
//         this.state={
//             modal:false,
//             istruemodal:false,
//         }
//     }

//     isMatched = (data) => {
//         console.warn(data);
//         this.setState({modal:data})
//         if(this.state.modal == true){
//             console.error("if")
//             this.setState({modal:false})
//         }else{
//             console.error('else')
//         }
//     }

//     toggle(){this.setState({modal:!this.state.modal})}

//   render() {
//     return (
//     <div>
//         <div className='text-center'>
//             <Button color="info" onClick={this.toggle}>
//                 Click Me
//             </Button>
//         </div>
//         <Modal isOpen={this.state.modal} toggle={this.toggle}
//         centered={true}
//         backdrop={true}>
//             <ModalHeader toggle={this.toggle}></ModalHeader>
//             <ModalBody>
//             <CaptchaTest isVerified={this.isMatched}/>
//             </ModalBody>
//         </Modal>
//     </div>
//     )
//   }
// }
