import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import EditContacts from './EditContacts';
import { deleteUser } from './UserReducer';
import { useDispatch } from 'react-redux';


function ContactList(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()

    function handleDelete(id) {
        dispatch(deleteUser({id: id}))
    }

  return (
    <>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditContacts contact={props.contact} closeUser={handleClose} />
        </Modal.Body>
      </Modal>
    
    <Card className='mx-2 mb-2 bg-info' style={{ width: '16rem' }}>
      <Card.Body>
        <Card.Title>Name :- {props.contact.name}</Card.Title>
        <Card.Subtitle>Number :- {props.contact.number}</Card.Subtitle>
        <Card.Text>Location :- {props.contact.location}</Card.Text>
        <Button onClick={handleShow}>EDIT</Button>
        <Button className='ms-2' variant="danger" 
                onClick={() => handleDelete(props.contact.id)}>
                  DELETE
        </Button>
      </Card.Body>
    </Card>
    </>
  );
}

export default ContactList;
