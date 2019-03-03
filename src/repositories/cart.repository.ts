export class CartRepository {
  private connection;
  constructor(connection) {
    this.connection = connection;
  }

  public findAll() {
    return this.connection.query(
        'SELECT products.*, taxes.value as taxValue ' +
        'FROM carts ' +
        'JOIN products ON products.id = carts.product_id ' +
        'JOIN categories ON categories.id=products.category_id ' +
        'LEFT JOIN taxes ON categories.tax_id=taxes.id');
  }

  public add({ product_id }) {
    return this.connection.query(
        `INSERT INTO carts (product_id)
        SELECT ${product_id}
        WHERE NOT EXISTS (SELECT * FROM carts WHERE product_id = ${product_id})`);
  }

  public deleteByProductId({ product_id }) {
    return this.connection.query(`DELETE FROM carts WHERE product_id=${product_id}`);
  }
}
