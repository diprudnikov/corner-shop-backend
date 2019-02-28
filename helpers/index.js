'use strict';

const applyTaxes = (cart) => {
    let totalTax = 0;
    let totalSum = 0;
    const products = cart.map(item => {
        const taxValue = Number(item.product.category.tax.value) + item.product.isImported * 5;
        const tax = Number(item.product.price) * taxValue / 100;
        const roundedTax = (Math.ceil(tax*20)/20).toFixed(2);
        totalTax += roundedTax;
        const totalPrice = item.product.price + roundedTax;
        totalSum += totalPrice;
        return {
            name: item.product.name,
            totalPrice,
        }
    });

    return {
        totalTax,
        totalSum,
        products,
    }

};

module.exports = {
    applyTaxes,
};

// const checkout = {
//     totalTax: 50,
//     totalSum: 20,
//     products: [
//         {
//             name: 'kek',
//             totalPrice: 23,
//         },
//         {
//             name: 'lol',
//             totalPrice: 43,
//         }
//     ]
// };