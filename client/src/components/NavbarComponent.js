import React, { useContext, useState } from 'react';
import { Button, Modal, Navbar } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';

export default function NavbarComponent() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const cart = useContext(CartContext);
    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)

    
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
                <h1>This is the modal body</h1>
            </Modal.Body>
    </Modal>
    </>

  )
}
