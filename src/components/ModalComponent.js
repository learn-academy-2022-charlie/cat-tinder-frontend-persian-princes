import React from 'react';
import {Modal, Button} from 'react-bootstrap'


function ModalComponent(props) {
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter" className="modal-name">
              {props.cat.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img id="modal-image" src={props.cat.image}></img>
            <h4 id="modal-age">{props.cat.age}</h4>
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