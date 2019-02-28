'use strict';

const { products: ProductModel } = require('../../models');

const getAllProducts = async (req, res) => {
    let products;
    try {
        products = await ProductModel.findAll();
    } catch (error) {
        res.status(500).json({ error: error.toString() })
    }
    res.status(200).json(products);
};

const getProductById = async (req, res) => {
    const id = req.params.id;
    let product;
    try {
        product = await ProductModel.findById(id);
    } catch (error) {
        res.status(500).json({ error: error.toString() })
    }
    res.status(200).json(product);
};

module.exports = {
    getAllProducts,
    getProductById,
};