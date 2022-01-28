import React from 'react';
import { Form,Button } from 'react-bootstrap';
import './BasicDetailForm.css'
import FormCalendar from '../Calendar/Calender';


function BasicDetailForm() {
  return <div>
      <div className='form_detail'>
      <div className='basicForm'>
          <div className='basic_text'>
          <h1>Let's start with your basic details</h1>
          </div>
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="PAN" placeholder="PAN" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <FormCalendar/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="Email" placeholder="Email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    {/* <Form.Label>Password</Form.Label> */}
    <Form.Control type="FirstName" placeholder="First Name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    {/* <Form.Label>Password</Form.Label> */}
    <Form.Control type="MiddleName" placeholder="Middle Name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    {/* <Form.Label>Password</Form.Label> */}
    <Form.Control type="LastName" placeholder="Last Name" />
  </Form.Group>
  <select className='mb-4' name="cars" id="cars">
  <optgroup label="Select">
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </optgroup>
    </select>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    {/* <Form.Label>Password</Form.Label> */}
    <Form.Control type="Father's Name" placeholder="Father's Name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    {/* <Form.Label>Password</Form.Label> */}
    <Form.Control type="Mobile Number" placeholder="Mobile Number" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    {/* <Form.Label>Password</Form.Label> */}
    <Form.Control type="12digitAadharNumber" placeholder="12 digit Aadhar Number" />
  </Form.Group>
 


  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
</div>
  </div>;
}

export default BasicDetailForm;
