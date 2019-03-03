export class TaxRepository {
  private connection;
  constructor(connection) {
    this.connection = connection;
  }

  public findById(id) {
    return this.connection.query(`SELECT * FROM taxes WHERE id = ${id}`);
  }
}
