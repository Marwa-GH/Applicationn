import React, { useState } from 'react';
import { useDispatch , useSelector} from 'react-redux';
import {savePaymentMethod } from '../../../JS/action/cartActions';
import CheckoutSteps from '../CheckoutSteps/CheckoutSteps';
import {Button ,Card , Form} from 'react-bootstrap'


function Payment(props) {/*
  const cart = useSelector(state => state.cart)
  const { shippingAdress } = cart

  const[paymentMethod,setPaymentMethod]=useState("");
  const dispatch = useDispatch();

   const submitHandler=(e)=>{
       e.preventDefault();
       dispatch(savePaymentMethod((paymentMethod)))
       props.history.push('/placeorder');
   }

    return  <div>
        <CheckoutSteps step1 step2 step3>
        </CheckoutSteps>
        <div style={{display:"flex" , marginLeft: "500px" , justifyContent:'space-between' }}>
        <Card style={{ width: '25rem' }} >
  <Card.Body>
    <Card.Title>Payment</Card.Title>
    <Form onSubmit={submitHandler}>
  {['radio'].map((paymentMethod) => (
    <div key={`default-${paymentMethod}`} className="mb-3">
       <Form.Check
      
        label="Cash"
        type={paymentMethod}
        id={`inline-{paymentMethod}-Cash`}
        name="paymentMethod" value="Cash" onChange={(e)=>setPaymentMethod(e.target.value)}
      />
      
      <Card.Img variant="top" src="data:image/jpeg;base64,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" />


    
      
        
    </div>
  ))}

    <Button variant="primary"  type="submit" >Continue</Button>
    </Form>
  </Card.Body>
</Card>
</div>
        </div>
        */
       
}

export default Payment;