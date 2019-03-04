import Tax from '../models/tax.model';

export class TaxRepository {
  private connection;

  constructor(connection) {
    this.connection = connection;
  }

  public findById(id): Promise<Tax[]> {
    return this.connection.query(`SELECT * FROM taxes WHERE id = ${id}`);
  }
}
