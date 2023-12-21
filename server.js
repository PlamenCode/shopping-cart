const express = require('express');
let cors = require('cors');
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_KEY);

start()

async function start(){
    const app = express();
    app.use(cors());
    app.use(express.static('public'));
    app.use(express.json());

    app.post('/checkout', async (req, res) => {
        const items = req.body.items;
        let lineItems = [];
        try {
            if(req.body.length < 1){ throw new Error('no body') } 
            
            items.forEach(item => {
                lineItems.push({
                    price: item.id,
                    quantity: item.quantity
                });
            });
            const session = await stripe.checkout.sessions.create({
                line_items: lineItems,
                mode: 'payment',
                success_url: 'http://localhost:3000/success',
                cancel_url: 'http://localhost:3000/cancel'
            });
            
            res.send(JSON.stringify({
                url: session.url
            }));
        } catch (error) {
            res.send(JSON.stringify({
                error: error.message
            }));
        }
        });
    
    app.listen(4000, console.log('Server is listening on port 4000...'))
};
