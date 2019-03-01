const express = require('express');
const productsController = require('../../controllers/products');
const cartController = require('../../controllers/cart');

const apiRouter = express.Router();

apiRouter.get('/products', productsController.getAllProducts);

apiRouter.get('/products/:id', productsController.getProductById);

apiRouter.get('/cart', cartController.getCart);

apiRouter.post('/cart', cartController.addToCart);

apiRouter.get('/cart/count', cartController.getCartCount);

apiRouter.get('/cart/checkout', cartController.getCartCheckout);

apiRouter.delete('/cart/:id', cartController.deleteItemFromCart);

module.exports = apiRouter;
