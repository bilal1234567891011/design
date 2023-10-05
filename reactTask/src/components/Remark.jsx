import React from 'react'
import { Col, Row ,Form ,Button, FormLabel } from 'react-bootstrap'
import './Remark.css'


function Remark() {
  return (
    <div className='remark'>
         <div>
        <Row className='w-35 container mt-3'>
        <Form.Group as={Col} controlId="formGridEmail">
          <div className='straight'>
          <FormLabel className='down' >REMARKS</FormLabel>
          <Form.Control  id='inputIDs'  style={{border:"1px solid black"}} type="" placeholder="XXXX" />
          </div>
        </Form.Group>
        </Row>
      </div>
      <Row className="mt-5 w-50 container">
        <Form.Group  as={Col} controlId="formGridEmail">
        <FormLabel className='down' >PREP BY</FormLabel>

          <Form.Control id='inputIDs' style={{border:"1px solid black"}} type="" placeholder="XXXX" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          
        <FormLabel className='down' >CHK BY</FormLabel>

          <Form.Control id='inputIDs' style={{border:"1px solid black"}} type="" placeholder="XXXX" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
        <FormLabel className='down' >APPROVED BY</FormLabel>

          <Form.Control id='inputIDs' style={{border:"1px solid black"}} type="" placeholder="XXXX" />
        </Form.Group>

       
       
      </Row>
      <div className='parts'>
      <Row className="mt-5 w-50 container">
        
        <Form.Group as={Col} controlId="formGridEmail">
        
        <FormLabel className='down' >DATE</FormLabel>

          <Form.Control id='inputIDs' style={{border:"1px solid black"}} type="" placeholder="XXXX" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
        <FormLabel className='down' >DATE</FormLabel>

          <Form.Control id='inputIDs' style={{border:"1px solid black"}} type="" placeholder="XXXX" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
        <FormLabel className='down' >DATE</FormLabel>

          <Form.Control id='inputIDs' style={{border:"1px solid black"}} type="" placeholder="XXXX" />
        </Form.Group>

       
       
      </Row>
      <div className='rr'>
        
        <p>BULDING ID</p>
        <p>BULDING NAME</p>


      </div>
   


      </div>
      <div className='buttons'>
        <div className='main-1'>
        
      <Button className='b1' style={{backgroundColor:'rgb(52, 119, 244)'}}>SEND FOR CHECK</Button>{' '}
      <Button className='b2' style={{backgroundColor:'rgb(52, 119, 244)'}}>SEND FOR APP</Button>{' '}
      <Button className='b3' style={{backgroundColor:'rgb(52, 119, 244)'}}>APPROVE</Button>{' '}
      </div>
<div className='main'>
      <Button className='b6 me-4' style={{backgroundColor:'rgb(52, 119, 244)'}}>DELETE</Button>{' '}
      <Button className='b7 me-4' style={{backgroundColor:'rgb(52, 119, 244)'}}>CANCEL</Button>{' '}
      <Button className='b8' style={{backgroundColor:'rgb(52, 119, 244)'}}>SAVE</Button>{' '}
      </div>
      </div>
    
     
      </div>

    
    
  )
}

export default Remark