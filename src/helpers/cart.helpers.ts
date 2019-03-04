import Product from '../models/product.model';
import Checkout from '../models/checkout.model';
import Tax from '../models/tax.model';

export default class CartHelpers {

  /**
   * @param products
   * @param importTax
   * @returns checkout object with calculated products prices and taxes
   */
  static getCheckout(products: Product[], importTax: Tax): Checkout {
    const checkout: Checkout = {
      totalSum: 0,
      totalTax: 0,
      products: [],
    };

    checkout.products = products.map((product: Product) => {
      const checkoutProduct = CartHelpers.decorateWithTaxes(product, importTax.value);
      checkout.totalTax += checkoutProduct.taxValue;
      checkout.totalSum += checkoutProduct.price;
      return checkoutProduct;
    });

    return {
      ...checkout,
      totalSum: CartHelpers.getRoundedNumber(checkout.totalSum),
      totalTax: CartHelpers.getRoundedNumber(checkout.totalTax),
    };
  }

  /**
   * @param product
   * @param importTax
   * @returns product object with calculated price and taxes
   */
  static decorateWithTaxes(product: Product, importTax: number): Product {
    const roundedTax = CartHelpers.getRoundedTax(product, importTax);
    const totalPrice = product.price + roundedTax;
    return {
      ...product,
      taxValue: roundedTax,
      price: CartHelpers.getRoundedNumber(totalPrice),
    };
  }

  /**
   * @param product
   * @param importTax
   * @returns rounded tax for current product
   */
  static getRoundedTax(product: Product, importTax: number): number {
    const taxValue = (Number(product.taxValue) +
      (product.isImported ? importTax : 0)) / 100;
    const finalTax = product.price * taxValue;
    return Number((Math.ceil(finalTax * 20) / 20).toFixed(2));
  }

  /**
   * @param number
   * @returns number rounded to 2 digits after dot
   */
  static getRoundedNumber(number: number): number {
    return Math.round(number * 100) / 100;
  }
}
