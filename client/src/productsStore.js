// TODO Chnage to database with all products

export const productsArray = [
    {
        id: '1',
        title: 'Coffee',
        price: 2.99
    },
    {
        id: '2',
        title: 'Water',
        price: 0.99
    },
    {
        id: '3',
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