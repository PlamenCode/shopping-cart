import React from 'react';
import { Button, Card } from 'react-bootstrap';

export default function ProductCard({ product }) {
  return (
    <Card>
        <Card.Body>
            <Card.Title>{ product.title }</Card.Title>
            <Card.Text>${ product.price }</Card.Text>
            <Button variant='primary' >Add To Cart</Button>
        </Card.Body>
    </Card>
  )
}
