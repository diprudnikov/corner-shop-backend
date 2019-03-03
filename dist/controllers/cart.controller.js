"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cart_helpers_1 = require("../helpers/cart.helpers");
class CartController {
    constructor(cartRepository, taxRepository) {
        this.router = express_1.Router();
        this.initRoutes();
        this.cartRepository = cartRepository;
        this.taxRepository = taxRepository;
    }
    getCheckout(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield this.cartRepository.findAll();
                const importTax = yield this.taxRepository.findById(2);
                const checkout = cart_helpers_1.default.getCheckout(products, importTax);
                res.status(200).json(checkout);
            }
            catch (error) {
                res.status(500).json({ error: error.toString() });
            }
        });
    }
    getCart(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cart = yield this.cartRepository.findAll();
                res.status(200).json(cart);
            }
            catch (error) {
                res.status(500).json({ error: error.toString() });
            }
        });
    }
    addToCart(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cart = yield this.cartRepository.add({ product_id: req.body.itemId });
                res.status(201).json(cart);
            }
            catch (err) {
                res.status(500).json(err);
            }
        });
    }
    deleteFromCart(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cart = yield this.cartRepository.deleteByProductId({ product_id: req.params.id });
                res.status(201).json(cart);
            }
            catch (err) {
                res.status(500).json(err);
            }
        });
    }
    initRoutes() {
        this.router.get('/', this.getCart.bind(this))
            .get('/checkout', this.getCheckout.bind(this))
            .post('/', this.addToCart.bind(this))
            .delete('/:id', this.deleteFromCart.bind(this));
    }
}
exports.CartController = CartController;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250cm9sbGVycy9jYXJ0LmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFDQUFrRTtBQU1sRSwwREFBa0Q7QUFFbEQ7SUFNRSxZQUFZLGNBQThCLEVBQUUsYUFBNEI7UUFDdEUsSUFBSSxDQUFDLE1BQU0sR0FBRyxnQkFBTSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3JDLENBQUM7SUFFYSxXQUFXLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQjs7WUFDdkUsSUFBSTtnQkFDRixNQUFNLFFBQVEsR0FBZSxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ2pFLE1BQU0sU0FBUyxHQUFTLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdELE1BQU0sUUFBUSxHQUFjLHNCQUFXLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFFekUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDaEM7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDZCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQ25EO1FBQ0gsQ0FBQztLQUFBO0lBRWEsT0FBTyxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0I7O1lBQ25FLElBQUk7Z0JBQ0YsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNqRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM1QjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNkLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDbkQ7UUFDSCxDQUFDO0tBQUE7SUFFYSxTQUFTLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQjs7WUFDckUsSUFBSTtnQkFDRixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUUsVUFBVSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztnQkFDNUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDNUI7WUFBQyxPQUFPLEdBQUcsRUFBRTtnQkFDWixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUMzQjtRQUNILENBQUM7S0FBQTtJQUVhLGNBQWMsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCOztZQUMxRSxJQUFJO2dCQUNGLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLFVBQVUsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ3hGLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzVCO1lBQUMsT0FBTyxHQUFHLEVBQUU7Z0JBQ1osR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDM0I7UUFDSCxDQUFDO0tBQUE7SUFFTyxVQUFVO1FBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN4QyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzdDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDcEMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Q0FDRjtBQTFERCx3Q0EwREMiLCJmaWxlIjoiY29udHJvbGxlcnMvY2FydC5jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEZ1bmN0aW9uLCBSZXF1ZXN0LCBSZXNwb25zZSwgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCB7IENhcnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vcmVwb3NpdG9yaWVzL2NhcnQucmVwb3NpdG9yeSc7XHJcbmltcG9ydCB7IFRheFJlcG9zaXRvcnkgfSBmcm9tICcuLi9yZXBvc2l0b3JpZXMvdGF4LnJlcG9zaXRvcnknO1xyXG5pbXBvcnQgSUNoZWNrb3V0IGZyb20gJy4uL21vZGVscy9jaGVja291dC5tb2RlbCc7XHJcbmltcG9ydCBJUHJvZHVjdCBmcm9tICcuLi9tb2RlbHMvcHJvZHVjdC5tb2RlbCc7XHJcbmltcG9ydCBJVGF4IGZyb20gJy4uL21vZGVscy90YXgubW9kZWwnO1xyXG5pbXBvcnQgQ2FydEhlbHBlcnMgZnJvbSAnLi4vaGVscGVycy9jYXJ0LmhlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhcnRDb250cm9sbGVyIHtcclxuXHJcbiAgcHVibGljIHJvdXRlcjogUm91dGVyO1xyXG4gIHB1YmxpYyBjYXJ0UmVwb3NpdG9yeTogQ2FydFJlcG9zaXRvcnk7XHJcbiAgcHVibGljIHRheFJlcG9zaXRvcnk6IFRheFJlcG9zaXRvcnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNhcnRSZXBvc2l0b3J5OiBDYXJ0UmVwb3NpdG9yeSwgdGF4UmVwb3NpdG9yeTogVGF4UmVwb3NpdG9yeSkge1xyXG4gICAgdGhpcy5yb3V0ZXIgPSBSb3V0ZXIoKTtcclxuICAgIHRoaXMuaW5pdFJvdXRlcygpO1xyXG4gICAgdGhpcy5jYXJ0UmVwb3NpdG9yeSA9IGNhcnRSZXBvc2l0b3J5O1xyXG4gICAgdGhpcy50YXhSZXBvc2l0b3J5ID0gdGF4UmVwb3NpdG9yeTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgZ2V0Q2hlY2tvdXQocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHByb2R1Y3RzOiBJUHJvZHVjdFtdID0gYXdhaXQgdGhpcy5jYXJ0UmVwb3NpdG9yeS5maW5kQWxsKCk7XHJcbiAgICAgIGNvbnN0IGltcG9ydFRheDogSVRheCA9IGF3YWl0IHRoaXMudGF4UmVwb3NpdG9yeS5maW5kQnlJZCgyKTtcclxuICAgICAgY29uc3QgY2hlY2tvdXQ6IElDaGVja291dCA9IENhcnRIZWxwZXJzLmdldENoZWNrb3V0KHByb2R1Y3RzLCBpbXBvcnRUYXgpO1xyXG5cclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oY2hlY2tvdXQpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogZXJyb3IudG9TdHJpbmcoKSB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgZ2V0Q2FydChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgY2FydCA9IGF3YWl0IHRoaXMuY2FydFJlcG9zaXRvcnkuZmluZEFsbCgpO1xyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihjYXJ0KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IGVycm9yLnRvU3RyaW5nKCkgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIGFkZFRvQ2FydChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgY2FydCA9IGF3YWl0IHRoaXMuY2FydFJlcG9zaXRvcnkuYWRkKHsgcHJvZHVjdF9pZDogcmVxLmJvZHkuaXRlbUlkIH0pO1xyXG4gICAgICByZXMuc3RhdHVzKDIwMSkuanNvbihjYXJ0KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3luYyBkZWxldGVGcm9tQ2FydChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgY2FydCA9IGF3YWl0IHRoaXMuY2FydFJlcG9zaXRvcnkuZGVsZXRlQnlQcm9kdWN0SWQoeyBwcm9kdWN0X2lkOiByZXEucGFyYW1zLmlkIH0pO1xyXG4gICAgICByZXMuc3RhdHVzKDIwMSkuanNvbihjYXJ0KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0Um91dGVzKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIuZ2V0KCcvJywgdGhpcy5nZXRDYXJ0LmJpbmQodGhpcykpXHJcbiAgICAgICAgLmdldCgnL2NoZWNrb3V0JywgdGhpcy5nZXRDaGVja291dC5iaW5kKHRoaXMpKVxyXG4gICAgICAgIC5wb3N0KCcvJywgdGhpcy5hZGRUb0NhcnQuYmluZCh0aGlzKSlcclxuICAgICAgICAuZGVsZXRlKCcvOmlkJywgdGhpcy5kZWxldGVGcm9tQ2FydC5iaW5kKHRoaXMpKTtcclxuICB9XHJcbn1cclxuIl19
