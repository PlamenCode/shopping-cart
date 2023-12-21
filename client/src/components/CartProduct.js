import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../context/CartContext';
import { getProductData } from '../productsStore';

export default function CartProduct({id, quantity}) {
    const cart = useContext(CartContext);
    const productData = getProductData(id);
    
  return (
    <>
        <h3>{productData.title}</h3>
        <p>Quantity: {quantity}</p>
        <p>Total Price: ${(quantity * productData.price).toFixed(2)}</p>
        <Button size='sm' onClick={() => cart.deleteFromCart(id)} >Remove</Button>
        <hr />
    </>
  )
}
