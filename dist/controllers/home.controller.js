"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const showdown_1 = require("showdown");
const path = require("path");
const fs = require("fs");
class HomeController {
    constructor() {
        this.router = express_1.Router();
        this.initializeRoutes();
    }
    get(req, res, next) {
        fs.readFile(path.resolve(`${__dirname}/../../README.md`), (err, data) => {
            const converter = new showdown_1.Converter();
            const markdown = converter.makeHtml(data.toString());
            res.render('home', {
                markdown,
                title: 'corner-shop-api',
            });
        });
    }
    initializeRoutes() {
        this.router.get('/', this.get.bind(this));
    }
}
exports.HomeController = HomeController;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250cm9sbGVycy9ob21lLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBa0U7QUFDbEUsdUNBQXFDO0FBQ3JDLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFFekI7SUFHRTtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsZ0JBQU0sRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxHQUFHLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQjtRQUNqRCxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxTQUFTLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFFdEUsTUFBTSxTQUFTLEdBQUcsSUFBSSxvQkFBUyxFQUFFLENBQUM7WUFDbEMsTUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUVyRCxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtnQkFDakIsUUFBUTtnQkFDUixLQUFLLEVBQUUsaUJBQWlCO2FBQ3pCLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUwsQ0FBQztJQUVPLGdCQUFnQjtRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDO0NBQ0Y7QUF6QkQsd0NBeUJDIiwiZmlsZSI6ImNvbnRyb2xsZXJzL2hvbWUuY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRGdW5jdGlvbiwgUmVxdWVzdCwgUmVzcG9uc2UsIFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgeyBDb252ZXJ0ZXIgfSBmcm9tICdzaG93ZG93bic7XHJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29udHJvbGxlciB7XHJcbiAgcm91dGVyOiBSb3V0ZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIgPSBSb3V0ZXIoKTtcclxuICAgIHRoaXMuaW5pdGlhbGl6ZVJvdXRlcygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0KHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSB7XHJcbiAgICBmcy5yZWFkRmlsZShwYXRoLnJlc29sdmUoYCR7X19kaXJuYW1lfS8uLi8uLi9SRUFETUUubWRgKSwgKGVyciwgZGF0YSkgPT4ge1xyXG5cclxuICAgICAgY29uc3QgY29udmVydGVyID0gbmV3IENvbnZlcnRlcigpO1xyXG4gICAgICBjb25zdCBtYXJrZG93biA9IGNvbnZlcnRlci5tYWtlSHRtbChkYXRhLnRvU3RyaW5nKCkpO1xyXG5cclxuICAgICAgcmVzLnJlbmRlcignaG9tZScsIHtcclxuICAgICAgICBtYXJrZG93bixcclxuICAgICAgICB0aXRsZTogJ2Nvcm5lci1zaG9wLWFwaScsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0aWFsaXplUm91dGVzKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIuZ2V0KCcvJywgdGhpcy5nZXQuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
