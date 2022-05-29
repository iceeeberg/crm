import ReactDom from "react-dom";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import {useState} from 'react';
import Client from './Client';

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

  const[data, setData] = useState([]);
  const api = axios.create({
    baseURL: "http://localhost:8080/clients/"
  });

  const deleteHandler = (id) => {
    api.get('/all').then((res) => {
      const clients = []
      for(const index in res.data){
        clients.push(
          id = res.data[index].id
        )
      }
      api.delete(`/delete/${id}`).then(res => {
        setData(prevData => prevData.filter(client =>client.id !== id))
        alert('Client has been deleted!')
        window.location.reload();
      })
    })  
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
    <Button onClick={deleteHandler} variant="danger">Confirm</Button>
    <Button onClick={onClose} variant="secondary">Cancel</Button>
  </Modal.Footer>
</Modal.Dialog>
</div>
    </>, document.getElementById("delete")
  )
}

export default DeleteModal;