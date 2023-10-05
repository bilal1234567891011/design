import React from 'react'
import './Top.css'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { FormLabel } from 'react-bootstrap';


function Top() {
  return (

   
 <div className='form'>
 <Row className="mt-5 w-80 container">
 
        <Form.Group as={Col} controlId="formGridEmail">
        <div className='starightss'>
        <FormLabel className='down' >ORDERLISTID</FormLabel>

          <Form.Control id='inputIDs' style={{border:"1px solid black"}} type="" placeholder="XXXX" />
          </div>

        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
        <div className='starightss'>
        <FormLabel className='down' > <div className='sss'>BUILDINGID</div></FormLabel>

          <Form.Control id='inputID' style={{border:"1px solid black"}} type="" placeholder="XXXX" />
          </div>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
        <div className='starightss'>
        <FormLabel className='down' ><div className='sss'>BUILDINGNAME</div></FormLabel>

          <Form.Control id='inputID' style={{border:"1px solid black"}} type="" placeholder="XXXX" />
          </div>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">

        <div className='starightss'>
        <FormLabel className='down' ><div className='sss'>BUILDINGADDRESS</div></FormLabel>

          <Form.Control id='inputID' style={{border:"1px solid black"}} type="" placeholder="XXXX" />
  </div>
        </Form.Group>
      </Row>
      <div>
        <Row className='w-35 container mt-3'>
        <Form.Group as={Col} controlId="formGridEmail">
        <div className='starightss'>
        <FormLabel className='downs' >ORDERDESCRIPTION</FormLabel>

          <Form.Control id='inputIDs' style={{border:"1px solid black"}} type="" placeholder="XXXX" />
          </div>
        </Form.Group>
        </Row>
      </div>
      
 </div>

  

  )
}

export default Top