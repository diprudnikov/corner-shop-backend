"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CartRepository {
    constructor(connection) {
        this.connection = connection;
    }
    findAll() {
        return this.connection.query('SELECT products.*, taxes.value as taxValue ' +
            'FROM carts ' +
            'JOIN products ON products.id = carts.product_id ' +
            'JOIN categories ON categories.id=products.category_id ' +
            'LEFT JOIN taxes ON categories.tax_id=taxes.id');
    }
    add({ product_id }) {
        return this.connection.query(`INSERT INTO carts (product_id)
        SELECT ${product_id}
        WHERE NOT EXISTS (SELECT * FROM carts WHERE product_id = ${product_id})`);
    }
    deleteByProductId({ product_id }) {
        return this.connection.query(`DELETE FROM carts WHERE product_id=${product_id}`);
    }
}
exports.CartRepository = CartRepository;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXBvc2l0b3JpZXMvY2FydC5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFFRSxZQUFZLFVBQVU7UUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDL0IsQ0FBQztJQUVNLE9BQU87UUFDWixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUN4Qiw2Q0FBNkM7WUFDN0MsYUFBYTtZQUNiLGtEQUFrRDtZQUNsRCx3REFBd0Q7WUFDeEQsK0NBQStDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRU0sR0FBRyxDQUFDLEVBQUUsVUFBVSxFQUFFO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQ3hCO2lCQUNTLFVBQVU7bUVBQ3dDLFVBQVUsR0FBRyxDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUVNLGlCQUFpQixDQUFDLEVBQUUsVUFBVSxFQUFFO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsc0NBQXNDLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDbkYsQ0FBQztDQUNGO0FBekJELHdDQXlCQyIsImZpbGUiOiJyZXBvc2l0b3JpZXMvY2FydC5yZXBvc2l0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENhcnRSZXBvc2l0b3J5IHtcclxuICBwcml2YXRlIGNvbm5lY3Rpb247XHJcbiAgY29uc3RydWN0b3IoY29ubmVjdGlvbikge1xyXG4gICAgdGhpcy5jb25uZWN0aW9uID0gY29ubmVjdGlvbjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBmaW5kQWxsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvbi5xdWVyeShcclxuICAgICAgICAnU0VMRUNUIHByb2R1Y3RzLiosIHRheGVzLnZhbHVlIGFzIHRheFZhbHVlICcgK1xyXG4gICAgICAgICdGUk9NIGNhcnRzICcgK1xyXG4gICAgICAgICdKT0lOIHByb2R1Y3RzIE9OIHByb2R1Y3RzLmlkID0gY2FydHMucHJvZHVjdF9pZCAnICtcclxuICAgICAgICAnSk9JTiBjYXRlZ29yaWVzIE9OIGNhdGVnb3JpZXMuaWQ9cHJvZHVjdHMuY2F0ZWdvcnlfaWQgJyArXHJcbiAgICAgICAgJ0xFRlQgSk9JTiB0YXhlcyBPTiBjYXRlZ29yaWVzLnRheF9pZD10YXhlcy5pZCcpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZCh7IHByb2R1Y3RfaWQgfSkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvbi5xdWVyeShcclxuICAgICAgICBgSU5TRVJUIElOVE8gY2FydHMgKHByb2R1Y3RfaWQpXHJcbiAgICAgICAgU0VMRUNUICR7cHJvZHVjdF9pZH1cclxuICAgICAgICBXSEVSRSBOT1QgRVhJU1RTIChTRUxFQ1QgKiBGUk9NIGNhcnRzIFdIRVJFIHByb2R1Y3RfaWQgPSAke3Byb2R1Y3RfaWR9KWApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlbGV0ZUJ5UHJvZHVjdElkKHsgcHJvZHVjdF9pZCB9KSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25uZWN0aW9uLnF1ZXJ5KGBERUxFVEUgRlJPTSBjYXJ0cyBXSEVSRSBwcm9kdWN0X2lkPSR7cHJvZHVjdF9pZH1gKTtcclxuICB9XHJcbn1cclxuIl19
