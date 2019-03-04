import { NextFunction, Request, Response, Router } from 'express';
import { CartRepository } from '../repositories/cart.repository';
import { TaxRepository } from '../repositories/tax.repository';
import Checkout from '../models/checkout.model';
import Product from '../models/product.model';
import Tax from '../models/tax.model';
import CartHelpers from '../helpers/cart.helpers';

const importTaxId = 2;

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
      const products: Product[] = await this.cartRepository.findAll();
      const importTax: Tax[] = await this.taxRepository.findById(importTaxId);
      const checkout: Checkout = CartHelpers.getCheckout(products, importTax[0]);

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

  private initRoutes(): void {
    this.router.get('/', this.getCart.bind(this))
        .get('/checkout', this.getCheckout.bind(this))
        .post('/', this.addToCart.bind(this))
        .delete('/:id', this.deleteFromCart.bind(this));
  }
}
