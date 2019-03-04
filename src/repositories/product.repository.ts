import Product from '../models/product.model';

export class ProductRepository {
  private connection;

  constructor(connection) {
    this.connection = connection;
  }

  public findAll(): Promise<Product[]> {
    return this.connection.query('SELECT * FROM products');
  }
}
