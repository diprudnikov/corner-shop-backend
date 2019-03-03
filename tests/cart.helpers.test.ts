import * as chai from 'chai';
import CartHelpers from '../src/helpers/cart.helpers';
import IProduct from '../src/models/product.model';
import ITax from '../src/models/tax.model';

describe('cart.helpers', () => {
  let products: IProduct[] = [];
  let product: IProduct;
  const importTax: ITax = {
    name: 'import',
    value: 5,
  };

  beforeEach(() => {
    product = {
      taxValue: 10,
      isImported: true,
      price: 10,
      name: 'Skittles',
    };
  });

  describe('#getCheckout', () => {

    it('should return an object', () => {
      chai.expect(CartHelpers.getCheckout(products, importTax)).to.be.an('object');
    });

    it('should return proper result #1', () => {
      products = [
        {
          name: 'Walkman',
          taxValue: 10,
          isImported: false,
          price: 99.99,
        },
        {
          name: 'Skittles',
          taxValue: 0,
          isImported: false,
          price: 16,
        },
        {
          name: 'bag of microwave Popcorn',
          taxValue: 0,
          isImported: false,
          price: 0.99,
        },
      ];
      chai.expect(CartHelpers.getCheckout(products, importTax)).to.be.deep.equal({
        totalTax: 10,
        totalSum: 126.98,
        products: [
          {
            name: 'Walkman',
            isImported: false,
            price: 109.99,
            taxValue: 10,
          },
          {
            name: 'Skittles',
            isImported: false,
            price: 16,
            taxValue: 0,
          },
          {
            name: 'bag of microwave Popcorn',
            taxValue: 0,
            isImported: false,
            price: 0.99,
          },
        ],
      });
    });

    it('should return proper result #2', () => {
      products = [
        {
          name: 'Vanilla-Hazelnut Coffee',
          taxValue: 0,
          isImported: true,
          price: 11,
        },
        {
          name: 'Vespa',
          taxValue: 10,
          isImported: true,
          price: 15001.25,
        },
      ];
      chai.expect(CartHelpers.getCheckout(products, importTax)).to.be.deep.equal({
        totalTax: 2250.75,
        totalSum: 17263,
        products: [
          {
            name: 'Vanilla-Hazelnut Coffee',
            isImported: true,
            price: 11.55,
            taxValue: 0.55,
          },
          {
            name: 'Vespa',
            isImported: true,
            price: 17251.45,
            taxValue: 2250.2,
          },
        ],
      });
    });

    it('should return proper result #3', () => {
      products = [
        {
          name: 'Discman',
          taxValue: 10,
          isImported: false,
          price: 55,
        },
        {
          name: 'Bottle of Wine',
          taxValue: 10,
          isImported: true,
          price: 10,
        },
        {
          name: 'Almond Snickers',
          taxValue: 0,
          isImported: true,
          price: 75.99,
        },
        {
          name: 'Fair-Trade Coffee',
          taxValue: 0,
          isImported: false,
          price: 997.99,
        },
      ];
      chai.expect(CartHelpers.getCheckout(products, importTax)).to.be.deep.equal({
        totalTax: 10.8,
        totalSum: 1149.78,
        products: [
          {
            name: 'Discman',
            isImported: false,
            price: 60.5,
            taxValue: 5.5,
          },
          {
            name: 'Bottle of Wine',
            isImported: true,
            price: 11.5,
            taxValue: 1.5,
          },
          {
            name: 'Almond Snickers',
            isImported: true,
            price: 79.79,
            taxValue: 3.8,
          },
          {
            name: 'Fair-Trade Coffee',
            isImported: false,
            price: 997.99,
            taxValue: 0,
          },
        ],
      });
    });
  });

  describe('#getRoundedTax', () => {
    let result: number;

    it('should return a number', () => {
      chai.expect(CartHelpers.getRoundedTax(product, importTax.value)).to.be.a('number');
    });

    it('should return proper result for imported, non-exempt product', () => {
      result = 1.5;
      chai.expect(CartHelpers.getRoundedTax(product, importTax.value)).to.eql(result);
    });

    it('should return proper result for not imported, non-exempt product', () => {
      result = 1;
      product.isImported = false;
      chai.expect(CartHelpers.getRoundedTax(product, importTax.value)).to.eql(result);
    });

    it('should return proper result for imported, exempt product', () => {
      result = 0.5;
      product.taxValue = 0;
      product.isImported = true;
      chai.expect(CartHelpers.getRoundedTax(product, importTax.value)).to.eql(result);
    });

    it('should return proper result for not imported, exempt product', () => {
      result = 0;
      product.taxValue = 0;
      product.isImported = false;
      chai.expect(CartHelpers.getRoundedTax(product, importTax.value)).to.eql(result);
    });
  });

  describe('#decorateWithTaxes', () => {
    let result: IProduct;

    it('should return an object', () => {
      chai.expect(CartHelpers.decorateWithTaxes(product, importTax.value)).to.be.an('object');
    });

    it('should return proper result for imported, non-exempt product', () => {
      result = {
        taxValue: 1.5,
        isImported: true,
        price: 11.5,
        name: 'Skittles',
      };
      chai.expect(CartHelpers.decorateWithTaxes(product, importTax.value)).to.deep.equal(result);
    });

    it('should return proper result for not imported, non-exempt product', () => {
      result = {
        taxValue: 1,
        isImported: false,
        price: 11,
        name: 'Skittles',
      };
      product.isImported = false;
      chai.expect(CartHelpers.decorateWithTaxes(product, importTax.value)).to.deep.equal(result);
    });

    it('should return proper result for imported, exempt product', () => {
      result = {
        taxValue: 0.5,
        isImported: true,
        price: 10.5,
        name: 'Skittles',
      };
      product.taxValue = 0;
      product.isImported = true;
      chai.expect(CartHelpers.decorateWithTaxes(product, importTax.value)).to.deep.equal(result);
    });

    it('should return proper result for not imported, exempt product', () => {
      result = {
        taxValue: 0,
        isImported: false,
        price: 10,
        name: 'Skittles',
      };
      product.taxValue = 0;
      product.isImported = false;
      chai.expect(CartHelpers.decorateWithTaxes(product, importTax.value)).to.deep.equal(result);
    });
  });

  describe('#getRoundedNumber', () => {

    it('should return number', () => {
      chai.expect(CartHelpers.getRoundedNumber(5.999)).to.be.a('number');
    });

    it('should return correct result', () => {
      chai.expect(CartHelpers.getRoundedNumber(5.767888)).to.eql(5.77);
    });
  });
});
