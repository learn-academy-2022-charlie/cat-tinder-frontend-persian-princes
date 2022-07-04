import React from 'react';
import {Modal, Button} from 'react-bootstrap'
import './styles.module.css'
import '../Card/Card.css'


function ModalComponent(props) {
    return (
        <Modal
          {...props}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body id="modal-container">
            <div>
              <img id="modal-image" src={props.cat.image}></img>
              <div id="modal-info-container">
                <h4 id="modal-info"><span>{props.cat.name}</span>, {props.cat.age}</h4>
                <p id="modal-enjoys">
                  {props.cat.enjoys}
                </p>
                <Button id="modal-close" onClick={props.onHide}>Close</Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      );
}

export default ModalComponent;