import { Button} from "react-bootstrap";
import AddClient from './AddClient';
import {useState} from 'react';

const AddModalHandler = () => {

  const[isOpen, setIsOpen] =  useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)} variant="success">Add A Client+</Button>
      <AddClient open={isOpen} onClose={() => setIsOpen(false)}></AddClient>
    </div>
  );
};

export default AddModalHandler;
