import { Button} from "react-bootstrap";
import Modal from './AddModal';
import {useState} from 'react';

const AddClient = () => {

  const[isOpen, setIsOpen] =  useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)} variant="success">Add A Client+</Button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal>
    </div>
  );
};

export default AddClient;
