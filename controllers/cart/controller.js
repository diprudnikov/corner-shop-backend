const {
  carts: CartModel,
  products: ProductModel,
  categories: CategoryModel,
  taxes: TaxModel,
} = require('../../models');
const { applyTaxes } = require('../../helpers');

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {Promise<void>}
 */
const getCart = async (req, res) => {
  let cart;
  try {
    cart = await CartModel.findAll({
      include: [{
        model: ProductModel,
        include: [{
          model: CategoryModel,
          include: [TaxModel],
        }],
      }],
    });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
  res.status(200).json(cart);
};

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {Promise<void>}
 */
const addToCart = async (req, res) => {
  CartModel.findOrCreate({ where: { product_id: req.body.itemId } })
    .then((item) => {
      res.status(201).json(item);
    }).catch(error => res.status(500).json({ error: error.toString() }));
};

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {Promise<void>}
 */
const getCartCount = async (req, res) => {
  const cartCount = await CartModel.count();
  res.status(200).json({ cartCount });
};

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {Promise<void>}
 */
const getCartCheckout = async (req, res) => {
  let cart;
  try {
    cart = await CartModel.findAll({
      include: [{
        model: ProductModel,
        include: [{
          model: CategoryModel,
          include: [TaxModel],
        }],
      }],
    });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
  const checkout = applyTaxes(cart);
  res.status(200).json(checkout);
};

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {Promise<void>}
 */
const deleteItemFromCart = async (req, res) => {
  CartModel.destroy({
    where: {
      product_id: req.params.id,
    },
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
