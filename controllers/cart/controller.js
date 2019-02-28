'use strict';

const {carts: CartModel, products: ProductModel, categories: CategoryModel, taxes: TaxModel} = require('../../models');
const {applyTaxes} = require('../../helpers');

const getCart = async (req, res) => {
    let cart;
    try {
        cart = await CartModel.findAll({
            include: [{
                model: ProductModel,
                include: [{
                    model: CategoryModel,
                    include: [TaxModel]
                }]
            }]
        });
    } catch (error) {
        res.status(500).json({error: error.toString()});
    }
    res.status(200).json(cart);
};

const addToCart = async (req, res) => {
    const cartItem = { product_id: req.body.itemId };
    CartModel.create(cartItem).then(() => {
        res.status(201).json(cartItem);
    }).catch(error => res.status(500).json({error: error.toString()}))
};

const getCartCount = async (req, res) => {
    const cartCount = await CartModel.count();
    res.status(200).json({cartCount});
};

const getCartCheckout = async (req, res) => {
    let cart;
    try {
         cart = await CartModel.findAll({
            include: [{
                model: ProductModel,
                include: [{
                    model: CategoryModel,
                    include: [TaxModel]
                }]
            }]
        });
    } catch (error) {
        res.status(500).json({error: error.toString()});
    }
    const checkout = applyTaxes(cart);
    res.status(200).json(checkout);
};

const deleteItemFromCart = async (req, res) => {
    CartModel.destroy({
        where: {
            product_id: req.params.id,
        }
    }).then(() => {
        res.status(200).send();
    }).catch(console.error);
};

module.exports = {
    addToCart,
    getCart,
    getCartCount,
    getCartCheckout,
    deleteItemFromCart,
};