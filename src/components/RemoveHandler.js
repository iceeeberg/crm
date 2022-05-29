import DeleteIcon from '@mui/icons-material/Delete';
import {useState} from 'react';
import DeleteModal from './DeleteModal';

const RemoveHandler = () => {
  const[isOpen, setIsOpen] =  useState(false);


  return(
    <div>
    <DeleteIcon style={{cursor: 'pointer'}} onClick={()=> setIsOpen(true)}/>
    <DeleteModal open={isOpen} onClose={() => setIsOpen(false)}/>
    </div>
  )
}

export default RemoveHandler;