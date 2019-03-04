import Product from './product.model';

export default interface Checkout {
  totalSum: number;
  totalTax: number;
  products: Product[];
}
