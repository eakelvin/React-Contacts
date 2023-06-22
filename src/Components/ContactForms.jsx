import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './UserReducer';

function ContactForms() {
  const dispatch = useDispatch()

    const [dataForm, setDataForm] = useState({
        name:"",
        number:"",
        location:""
    })

    function handleChange(event){
        const {name, value} = event.target
        setDataForm(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
        // setDataForm({[name]: value})
    }

    function handleSubmit(event) {
        event.preventDefault()
        const newUser = {
          name: dataForm.name,
          number: dataForm.number,
          location: dataForm.location
        }
        dispatch(addUser(newUser))
        setDataForm({
            name:"",
            number:"",
            location:""
        })
    }

  return (
    <Form onSubmit={handleSubmit}>

      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" required 
            name='name' value={dataForm.name} onChange={handleChange} />
      </Form.Group>

      <Form.Group controlId="formGridEmail">
          <Form.Label>Number</Form.Label>
          <Form.Control type="number" placeholder="Enter number" required 
            name='number' value={dataForm.number} onChange={handleChange}/>
        </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>location</Form.Label>
        <Form.Control placeholder="Location" required
            name='location' value={dataForm.location} onChange={handleChange} />
      </Form.Group>

      <Button type="submit">Submit form</Button>
    </Form>
  );
}

export default ContactForms;