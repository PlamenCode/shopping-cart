import React, { useContext, useState } from 'react';
import { Button, Modal, Navbar } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';
import CartProduct from './CartProduct';

export default function NavbarComponent() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const cart = useContext(CartContext);
    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)

    async function checkout(){
        await fetch('http://localhost:4000/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({items: cart.items})
        }).then( (res) => { return res.json() })
          .then((res) => {
            console.log(res);
            if(res.url){
                window.location.assign(res.url)
            }
          })
    };
    
  return (
    <>
    <Navbar expand='sm' >
        <Navbar.Brand href='/'>Ecommerce Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end' >
            <Button onClick={handleShow} >Cart ({productsCount} Items)</Button>
        </Navbar.Collapse>
    </Navbar>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton >
            <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
            <Modal.Body>
                { productsCount < 1 
                    ? <h1>No Items Yet.</h1>
                    : <>
                        <p>Items in your cart: {productsCount}</p>
                        {cart.items.map((currentProduct, index) => (
                            <CartProduct key={index} id={currentProduct.id} quantity={currentProduct.quantity} />
                        ))}

                        <h1>Total: ${cart.getTotalCost().toFixed(2)}</h1>

                        <Button 
                            variant='success'
                            onClick={checkout}
                        >Purchase items!</Button>
                    </> 
                }
            </Modal.Body>
    </Modal>
    </>

  )
}
