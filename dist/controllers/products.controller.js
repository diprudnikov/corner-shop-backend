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
class ProductsController {
    constructor(productRepository) {
        this.router = express_1.Router();
        this.initRoutes();
        this.productRepository = productRepository;
    }
    getAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield this.productRepository.findAll();
                res.status(200).json(products);
            }
            catch (error) {
                res.status(500).json({ error: error.toString() });
            }
        });
    }
    initRoutes() {
        this.router.get('/', this.getAll.bind(this));
    }
}
exports.ProductsController = ProductsController;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250cm9sbGVycy9wcm9kdWN0cy5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQ0FBa0U7QUFHbEU7SUFLRSxZQUFZLGlCQUFvQztRQUM5QyxJQUFJLENBQUMsTUFBTSxHQUFHLGdCQUFNLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO0lBQzdDLENBQUM7SUFFYSxNQUFNLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQjs7WUFDbEUsSUFBSTtnQkFDRixNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDeEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDaEM7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDZCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQ25EO1FBQ0gsQ0FBQztLQUFBO0lBRU8sVUFBVTtRQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0NBRUY7QUF4QkQsZ0RBd0JDIiwiZmlsZSI6ImNvbnRyb2xsZXJzL3Byb2R1Y3RzLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0RnVuY3Rpb24sIFJlcXVlc3QsIFJlc3BvbnNlLCBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IHsgUHJvZHVjdFJlcG9zaXRvcnkgfSBmcm9tICcuLi9yZXBvc2l0b3JpZXMvcHJvZHVjdC5yZXBvc2l0b3J5JztcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9kdWN0c0NvbnRyb2xsZXIge1xyXG5cclxuICBwdWJsaWMgcm91dGVyOiBSb3V0ZXI7XHJcbiAgcHVibGljIHByb2R1Y3RSZXBvc2l0b3J5OiBQcm9kdWN0UmVwb3NpdG9yeTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvZHVjdFJlcG9zaXRvcnk6IFByb2R1Y3RSZXBvc2l0b3J5KSB7XHJcbiAgICB0aGlzLnJvdXRlciA9IFJvdXRlcigpO1xyXG4gICAgdGhpcy5pbml0Um91dGVzKCk7XHJcbiAgICB0aGlzLnByb2R1Y3RSZXBvc2l0b3J5ID0gcHJvZHVjdFJlcG9zaXRvcnk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIGdldEFsbChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCB0aGlzLnByb2R1Y3RSZXBvc2l0b3J5LmZpbmRBbGwoKTtcclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24ocHJvZHVjdHMpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogZXJyb3IudG9TdHJpbmcoKSB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdFJvdXRlcygpIHtcclxuICAgIHRoaXMucm91dGVyLmdldCgnLycsIHRoaXMuZ2V0QWxsLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19
