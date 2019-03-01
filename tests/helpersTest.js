const expect = require('chai').expect;

const {
  taxes: TaxModel,
  products: ProductModel,
  categories: CategoryModel,
  Sequelize,
} = require('../models');
const { applyTaxes } = require('../helpers');

const { Op } = Sequelize;

describe('Helpers file', () => {
  describe('applyTaxes', () => {
    it('basket 1', async () => {
      const products = await ProductModel.findAll({
        where: {
          id: {
            [Op.in]: [2, 1, 3],
          },
        },
        include: [{
          model: CategoryModel,
          include: [TaxModel],
        }],
      });
      const cart = products.map(product => ({
        product,
      }));

      const result = applyTaxes(cart);
      expect(result).to.deep.equal({
        totalTax: 10,
        totalSum: 126.98,
        products: [
          {
            name: 'Walkman',
            isImported: 0,
            totalPrice: 109.99,
          },
          {
            name: 'Skittles',
            isImported: 0,
            totalPrice: 16,
          },
          {
            name: 'bag of microwave Popcorn',
            isImported: 0,
            totalPrice: 0.99,
          },
        ],
      });
    });
    it('basket 2', async () => {
      const products = await ProductModel.findAll({
        where: {
          id: {
            [Op.in]: [4, 5],
          },
        },
        include: [{
          model: CategoryModel,
          include: [TaxModel],
        }],
      });
      const cart = products.map(product => ({
        product,
      }));

      const result = applyTaxes(cart);
      expect(result).to.deep.equal({
        totalTax: 2250.8,
        totalSum: 17263.05,
        products: [
          {
            name: 'Vespa ',
            isImported: 1,
            totalPrice: 17251.45,
          },
          {
            name: 'Vanilla-Hazelnut Coffee ',
            isImported: 1,
            totalPrice: 11.55,
          },
        ],
      });
    });
    it('basket 3', async () => {
      const products = await ProductModel.findAll({
        where: {
          id: {
            [Op.in]: [6, 7, 8, 9],
          },
        },
        include: [{
          model: CategoryModel,
          include: [TaxModel],
        }],
      });
      const cart = products.map(product => ({
        product,
      }));

      const result = applyTaxes(cart);
      expect(result).to.deep.equal({
        totalTax: 10.8,
        totalSum: 1149.78,
        products: [
          {
            name: 'Discman ',
            isImported: null,
            totalPrice: 60.5,
          },
          {
            name: 'Bottle of Wine ',
            isImported: 1,
            totalPrice: 11.5,
          },
          {
            name: 'Almond Snickers ',
            isImported: 1,
            totalPrice: 79.79,
          },
          {
            name: 'Fair-Trade Coffee ',
            isImported: null,
            totalPrice: 997.99,
          },
        ],
      });
    });
  });
});
