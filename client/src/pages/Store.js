import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { productsArray } from '../productsStore';
import ProductCard from '../components/ProductCard';

export default function Store() {
    
  return (
    <>
        <h1 align='center' className='p-3' >Wellcome to the Store</h1>
        <Row xs={1} md={3} className='g-4' >
            {productsArray.map((product, index) => (
                <Col key={index} align='center'>
                    <ProductCard product={product}/>
                </Col>
            ))}
        </Row>
    </>
  )
}
