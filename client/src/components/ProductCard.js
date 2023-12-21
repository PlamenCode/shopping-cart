import React, { useContext } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';


export default function ProductCard({ product }) {
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);
  return (
    <Card>
        <Card.Body>
            <Card.Title>{ product.title }</Card.Title>
            <Card.Text>${ product.price }</Card.Text>
            { productQuantity > 0
                ?<>
                    <Form as={Row} >
                        <Col sm='6'>
                        <Form.Label colum='true' sm='6'>In Cart: {productQuantity}</Form.Label>
                            <Button sm='6' className='mx-2' onClick={() => cart.addToCart(product.id)} >+</Button>
                            <Button sm='6' className='mx-2' onClick={() => cart.removeFromCart(product.id)} >-</Button>
                        </Col>
                    </Form>
                    <Button variant='danger' className='my-2' onClick={() => cart.deleteFromCart(product.id)} >Remove from Cart</Button>
                </>
                : <Button 
                    variant='primary'  
                    onClick={() => cart.addToCart(product.id)}
                >Add To Cart</Button>
            }
        </Card.Body>
    </Card>
  )
}
