import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function EditTiers() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleSave = () => {
    handleClose();
  };

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Edit Tiers
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton className="border-0">
          <Modal.Title>Edit Tiers</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Modal content goes here.</p>
        </Modal.Body>
        <div className="p-3 d-flex justify-content-between">
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </div>
      </Modal>
    </>
  );
}
