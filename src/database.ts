import * as mysql from 'promise-mysql';

const dbConnection = null;

function createConnection() {
  if (dbConnection !== null) {
    return dbConnection;
  }

  return mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
  });
}

export {
  createConnection,
};
