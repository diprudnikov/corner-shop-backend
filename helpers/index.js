/**
 *
 * @param {carts} cart
 * @returns {{totalTax: number, totalSum: number, products: Array}}
 */
const applyTaxes = (cart) => {
  const result = {
    totalTax: 0,
    totalSum: 0,
    products: [],
  };
  if (cart.length > 0) {
    result.products = cart.map(({ product }) => {
      const taxValue = (Number(product.category.tax ? product.category.tax.value : 0)
          + product.isImported * 5) / 100;
      const tax = Number(product.price) * taxValue;
      const roundedTax = Number((Math.ceil(tax * 20) / 20).toFixed(2)) * 1000;

      const totalPrice = Number(product.price) * 1000 + roundedTax;

      result.totalTax += roundedTax;
      result.totalSum += totalPrice;

      return {
        name: product.name,
        isImported: product.isImported,
        totalPrice: totalPrice / 1000,
      };
    });
  }
  return {
    ...result,
    totalTax: result.totalTax / 1000,
    totalSum: result.totalSum / 1000,
  };
};

module.exports = {
  applyTaxes,
};
