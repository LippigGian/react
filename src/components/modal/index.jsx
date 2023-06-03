
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ModalExample = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleShow = () => {
    setShowModal(true);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Abrir Modal
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ejemplo de Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Contenido del modal...</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export  {ModalExample}