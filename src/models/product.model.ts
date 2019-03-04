import Category from './category.model';

export default interface Product{
  name: string;
  price: number;
  taxValue?: number;
  isImported: boolean;
  category?: Category;
}
