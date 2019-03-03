export class ProductRepository {
  private connection;
  constructor(connection) {
    this.connection = connection;
  }

  public findAll() {
    return this.connection.query('SELECT * FROM products');
  }
}
