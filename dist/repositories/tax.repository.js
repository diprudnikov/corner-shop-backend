"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TaxRepository {
    constructor(connection) {
        this.connection = connection;
    }
    findById(id) {
        return this.connection.query(`SELECT * FROM taxes WHERE id = ${id}`);
    }
}
exports.TaxRepository = TaxRepository;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXBvc2l0b3JpZXMvdGF4LnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUVFLFlBQVksVUFBVTtRQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUMvQixDQUFDO0lBRU0sUUFBUSxDQUFDLEVBQUU7UUFDaEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxrQ0FBa0MsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN2RSxDQUFDO0NBQ0Y7QUFURCxzQ0FTQyIsImZpbGUiOiJyZXBvc2l0b3JpZXMvdGF4LnJlcG9zaXRvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgVGF4UmVwb3NpdG9yeSB7XHJcbiAgcHJpdmF0ZSBjb25uZWN0aW9uO1xyXG4gIGNvbnN0cnVjdG9yKGNvbm5lY3Rpb24pIHtcclxuICAgIHRoaXMuY29ubmVjdGlvbiA9IGNvbm5lY3Rpb247XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZmluZEJ5SWQoaWQpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbm5lY3Rpb24ucXVlcnkoYFNFTEVDVCAqIEZST00gdGF4ZXMgV0hFUkUgaWQgPSAke2lkfWApO1xyXG4gIH1cclxufVxyXG4iXX0=
