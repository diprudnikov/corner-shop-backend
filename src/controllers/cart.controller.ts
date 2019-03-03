import { NextFunction, Request, Response, Router } from 'express';
import { CartRepository } from '../repositories/cart.repository';
import { TaxRepository } from '../repositories/tax.repository';
import ICheckout from '../models/checkout.model';
import IProduct from '../models/product.model';
import ITax from '../models/tax.model';
import CartHelpers from '../helpers/cart.helpers';

export class CartController {

  public router: Router;
  public cartRepository: CartRepository;
  public taxRepository: TaxRepository;

  constructor(cartRepository: CartRepository, taxRepository: TaxRepository) {
    this.router = Router();
    this.initRoutes();
    this.cartRepository = cartRepository;
    this.taxRepository = taxRepository;
  }

  private async getCheckout(req: Request, res: Response, next: NextFunction) {
    try {
      const products: IProduct[] = await this.cartRepository.findAll();
      const importTax: ITax = await this.taxRepository.findById(2);
      const checkout: ICheckout = CartHelpers.getCheckout(products, importTax);

      res.status(200).json(checkout);
    } catch (error) {
      res.status(500).json({ error: error.toString() });
    }
  }

  private async getCart(req: Request, res: Response, next: NextFunction) {
    try {
      const cart = await this.cartRepository.findAll();
      res.status(200).json(cart);
    } catch (error) {
      res.status(500).json({ error: error.toString() });
    }
  }

  private async addToCart(req: Request, res: Response, next: NextFunction) {
    try {
      const cart = await this.cartRepository.add({ product_id: req.body.itemId });
      res.status(201).json(cart);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  private async deleteFromCart(req: Request, res: Response, next: NextFunction) {
    try {
      const cart = await this.cartRepository.deleteByProductId({ product_id: req.params.id });
      res.status(201).json(cart);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  private initRoutes() {
    this.router.get('/', this.getCart.bind(this))
        .get('/checkout', this.getCheckout.bind(this))
        .post('/', this.addToCart.bind(this))
        .delete('/:id', this.deleteFromCart.bind(this));
  }
}
