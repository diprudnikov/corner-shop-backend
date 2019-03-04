import { NextFunction, Request, Response, Router } from 'express';
import { ProductRepository } from '../repositories/product.repository';

export class ProductsController {

  public router: Router;
  public productRepository: ProductRepository;

  constructor(productRepository: ProductRepository) {
    this.router = Router();
    this.initRoutes();
    this.productRepository = productRepository;
  }

  private async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const products = await this.productRepository.findAll();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: error.toString() });
    }
  }

  private initRoutes(): void {
    this.router.get('/', this.getAll.bind(this));
  }

}
