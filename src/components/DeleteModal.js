import ReactDom from "react-dom";
import { Modal, Button } from "react-bootstrap";

const MODAL_STYLES = {
  display:"flex",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "50px",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  display:"flex",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

const DeleteModal = ({open, onClose}) => {
  
  const deleteHandler = (id) => {
    
  }
  
  if (!open) return null;

  return ReactDom.createPortal(
    <>
     <div style={OVERLAY_STYLES} />
     <div style={MODAL_STYLES}>
    <Modal.Dialog>
  <Modal.Header>
    <Modal.Title>Delete Client?</Modal.Title>
  </Modal.Header>
  <Modal.Footer>
    <Button onClick={deleteHandler} variant="danger">Yes</Button>
    <Button onClick={onClose} variant="secondary">No</Button>
  </Modal.Footer>
</Modal.Dialog>
</div>
    </>, document.getElementById("delete")
  )
}

export default DeleteModal;