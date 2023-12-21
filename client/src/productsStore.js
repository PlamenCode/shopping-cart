// TODO Chnage to database with all products

//ID's in Stripe
//Coffee - price_1OPjh4GHuXIq1s5dMZXzhgHf
//Water - price_1OPjhyGHuXIq1s5d1G7UIEjO
//Cake - price_1OPjiWGHuXIq1s5dk87SnZaB

export const productsArray = [
    {
        id: 'price_1OPjh4GHuXIq1s5dMZXzhgHf',
        title: 'Coffee',
        price: 2.99
    },
    {
        id: 'price_1OPjhyGHuXIq1s5d1G7UIEjO',
        title: 'Water',
        price: 0.99
    },
    {
        id: 'price_1OPjiWGHuXIq1s5dk87SnZaB',
        title: 'Cake',
        price: 8.99
    },
];

export function getProductData(id){
    let productData = productsArray.find(product => product.id === id);
    if(productData === undefined){
        console.log(`No product with '${id}' ID was found`);
        return undefined;
    };
    return productData;
}