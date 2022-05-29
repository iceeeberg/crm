import { Button, Form } from "react-bootstrap";
import ReactDom from "react-dom";
import axios from "axios";
import {useState} from 'react';

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

const AddModal = ({ open, onClose }) => {

  const[client, setClient] = useState([]);

  const api = axios.create({
    baseURL: "http://localhost:8080/clients/"
  });

  const addClientHandler = (e, client) => {
    e.preventDefault();
    api.post('/create', client).then(res => {
      if(res.data != null) {
        setClient(client);
        alert('Client added successfully!')
      }
    })
  } 

  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
      <Form onSubmit={addClientHandler}>
        <Form.Group className="mb-3" >
          <Form.Label>First Name:</Form.Label>
          <Form.Control type="text" placeholder="First Name" />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Last Name:</Form.Label>
          <Form.Control type="text" placeholder="Last Name" />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Date Joined:</Form.Label>
          <Form.Control type="date" placeholder="Date Joined" />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Phone Number:</Form.Label>
          <Form.Control type="phone" placeholder="Phone Number" />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>E-mail:</Form.Label>
          <Form.Control type="email" placeholder="E-mail" />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>City:</Form.Label>
          <Form.Control type="text" placeholder="City" />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Goals:</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Goals" />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Description:</Form.Label>
          <Form.Control as="textarea" rows={3}placeholder="Description" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button onClick={onClose} variant="danger">
          Close
        </Button>
      </Form>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default AddModal;
