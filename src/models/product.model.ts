import ICategory from './category.model';

export default interface IProduct{
  name: string;
  price: number;
  taxValue?: number;
  isImported: boolean;
  category?: ICategory;
}
