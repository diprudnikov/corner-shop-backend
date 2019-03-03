import IProduct from './product.model';

export default interface ICheckout {
  totalSum: number;
  totalTax: number;
  products: IProduct[];
}
