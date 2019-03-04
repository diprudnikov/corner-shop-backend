import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import { ProductsController } from './controllers/products.controller';
import { ProductRepository } from './repositories/product.repository';
import { CartController } from './controllers/cart.controller';
import { CartRepository } from './repositories/cart.repository';
import { TaxRepository } from './repositories/tax.repository';

class App {
  public express: express.Application;

  constructor() {
    require('dotenv').config();
    this.express = express();
    this.middleware();
  }

  public middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(cors());
  }

  public routes(connection): void {
    const productRepository = new ProductRepository(connection);
    const cartRepository = new CartRepository(connection);
    const taxRepository = new TaxRepository(connection);

    this.express.use('/api/products', new ProductsController(productRepository).router);
    this.express.use('/api/cart', new CartController(cartRepository, taxRepository).router);
  }
}

export default new App();
