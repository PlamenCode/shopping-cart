import React, { createContext, useState } from 'react';
import { getProductData, productsArray } from '../productsStore';

//Context (cart, addToCart, removeFromCart, ...)
//Provider -> gives React app access to all the things in the context

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addToCart: () => {},
    removeFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
});

export function CartProvider({ children }){
    const [cartProducts, setCartProducts] = useState([]);

    function getProductQuantity(id){
        const quantity =  cartProducts.find(product => product.id === id)?.quantity;
        if(quantity === undefined){
            return 0;
        }
        return quantity;
    };

    function addToCart(id){
        const quantity = getProductQuantity(id);
        if(quantity === 0){ //Product not in cart
            setCartProducts(
                [...cartProducts, { id, quantity: 1 }]
            )
        } else {//Product is in cart already
            setCartProducts(
                cartProducts.map(product => 
                    product.id === id 
                    ? {...product, quantity: product.quantity + 1}
                    : product
                )
            )
        }
    };

    function removeFromCart(id){
        const quantity = getProductQuantity(id);
        if(quantity === 1){
            deleteFromCart(id);
        } else {
            setCartProducts(
                cartProducts.map(product => 
                    product.id === id 
                    ? {...product, quantity: product.quantity - 1}
                    : product
                )
            )
        }
    };

    function deleteFromCart(id){
        setCartProducts(
            cartProducts => 
                cartProducts.filter(currProduct => {
                    return currProduct.id !== id 
                })
        )
    };

    function getTotalCost(){
        let totalCost = 0;
        cartProducts.map((cartItem) => {
            const productData = getProductData(cartItem.id);
            totalCost += (productData.price * cartItem.quantity)
        });
        return totalCost;
    };

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addToCart,
        removeFromCart,
        deleteFromCart,
        getTotalCost
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}