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
            <img id="modal-image" src={props.cat.image}></img>
            <h4 id="modal-info"><span>{props.cat.name}</span>, {props.cat.age}</h4>
            <p id="modal-enjoys">
              {props.cat.enjoys}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
}

export default ModalComponent;