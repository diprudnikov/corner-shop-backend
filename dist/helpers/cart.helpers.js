"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CartHelpers {
    /**
     * @param products
     * @param importTax
     * @returns checkout object with calculated products prices and taxes
     */
    static getCheckout(products, importTax) {
        const checkout = {
            totalSum: 0,
            totalTax: 0,
            products: [],
        };
        checkout.products = products.map((product) => {
            const checkoutProduct = CartHelpers.decorateWithTaxes(product, importTax.value);
            checkout.totalTax += checkoutProduct.taxValue;
            checkout.totalSum += checkoutProduct.price;
            return checkoutProduct;
        });
        return Object.assign({}, checkout, { totalSum: CartHelpers.getRoundedNumber(checkout.totalSum), totalTax: CartHelpers.getRoundedNumber(checkout.totalTax) });
    }
    /**
     * @param product
     * @param importTax
     * @returns product object with calculated price and taxes
     */
    static decorateWithTaxes(product, importTax) {
        const roundedTax = CartHelpers.getRoundedTax(product, importTax);
        const totalPrice = product.price + roundedTax;
        return Object.assign({}, product, { taxValue: roundedTax, price: CartHelpers.getRoundedNumber(totalPrice) });
    }
    /**
     * @param product
     * @param importTax
     * @returns rounded tax for current product
     */
    static getRoundedTax(product, importTax) {
        const taxValue = (Number(product.taxValue) +
            (product.isImported ? importTax : 0)) / 100;
        const finalTax = product.price * taxValue;
        return Number((Math.ceil(finalTax * 20) / 20).toFixed(2));
    }
    /**
     * @param number
     * @returns number rounded to 2 digits after dot
     */
    static getRoundedNumber(number) {
        return Math.round(number * 100) / 100;
    }
}
exports.default = CartHelpers;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9oZWxwZXJzL2NhcnQuaGVscGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBO0lBRUU7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyxXQUFXLENBQUMsUUFBb0IsRUFBRSxTQUFlO1FBQ3RELE1BQU0sUUFBUSxHQUFjO1lBQzFCLFFBQVEsRUFBRSxDQUFDO1lBQ1gsUUFBUSxFQUFFLENBQUM7WUFDWCxRQUFRLEVBQUUsRUFBRTtTQUNiLENBQUM7UUFFRixRQUFRLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFpQixFQUFFLEVBQUU7WUFDckQsTUFBTSxlQUFlLEdBQUcsV0FBVyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEYsUUFBUSxDQUFDLFFBQVEsSUFBSSxlQUFlLENBQUMsUUFBUSxDQUFDO1lBQzlDLFFBQVEsQ0FBQyxRQUFRLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQztZQUMzQyxPQUFPLGVBQWUsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztRQUVILHlCQUNLLFFBQVEsSUFDWCxRQUFRLEVBQUUsV0FBVyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFDekQsUUFBUSxFQUFFLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQ3pEO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsaUJBQWlCLENBQUMsT0FBaUIsRUFBRSxTQUFpQjtRQUMzRCxNQUFNLFVBQVUsR0FBRyxXQUFXLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNqRSxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQztRQUM5Qyx5QkFDSyxPQUFPLElBQ1YsUUFBUSxFQUFFLFVBQVUsRUFDcEIsS0FBSyxFQUFFLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsSUFDL0M7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyxhQUFhLENBQUMsT0FBaUIsRUFBRSxTQUFpQjtRQUN2RCxNQUFNLFFBQVEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3hDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM5QyxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztRQUMxQyxPQUFPLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBYztRQUNwQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUN4QyxDQUFDO0NBQ0Y7QUE5REQsOEJBOERDIiwiZmlsZSI6ImhlbHBlcnMvY2FydC5oZWxwZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElQcm9kdWN0IGZyb20gJy4uL21vZGVscy9wcm9kdWN0Lm1vZGVsJztcclxuaW1wb3J0IElDaGVja291dCBmcm9tICcuLi9tb2RlbHMvY2hlY2tvdXQubW9kZWwnO1xyXG5pbXBvcnQgSVRheCBmcm9tICcuLi9tb2RlbHMvdGF4Lm1vZGVsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcnRIZWxwZXJzIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHByb2R1Y3RzXHJcbiAgICogQHBhcmFtIGltcG9ydFRheFxyXG4gICAqIEByZXR1cm5zIGNoZWNrb3V0IG9iamVjdCB3aXRoIGNhbGN1bGF0ZWQgcHJvZHVjdHMgcHJpY2VzIGFuZCB0YXhlc1xyXG4gICAqL1xyXG4gIHN0YXRpYyBnZXRDaGVja291dChwcm9kdWN0czogSVByb2R1Y3RbXSwgaW1wb3J0VGF4OiBJVGF4KTogSUNoZWNrb3V0IHtcclxuICAgIGNvbnN0IGNoZWNrb3V0OiBJQ2hlY2tvdXQgPSB7XHJcbiAgICAgIHRvdGFsU3VtOiAwLFxyXG4gICAgICB0b3RhbFRheDogMCxcclxuICAgICAgcHJvZHVjdHM6IFtdLFxyXG4gICAgfTtcclxuXHJcbiAgICBjaGVja291dC5wcm9kdWN0cyA9IHByb2R1Y3RzLm1hcCgocHJvZHVjdDogSVByb2R1Y3QpID0+IHtcclxuICAgICAgY29uc3QgY2hlY2tvdXRQcm9kdWN0ID0gQ2FydEhlbHBlcnMuZGVjb3JhdGVXaXRoVGF4ZXMocHJvZHVjdCwgaW1wb3J0VGF4LnZhbHVlKTtcclxuICAgICAgY2hlY2tvdXQudG90YWxUYXggKz0gY2hlY2tvdXRQcm9kdWN0LnRheFZhbHVlO1xyXG4gICAgICBjaGVja291dC50b3RhbFN1bSArPSBjaGVja291dFByb2R1Y3QucHJpY2U7XHJcbiAgICAgIHJldHVybiBjaGVja291dFByb2R1Y3Q7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5jaGVja291dCxcclxuICAgICAgdG90YWxTdW06IENhcnRIZWxwZXJzLmdldFJvdW5kZWROdW1iZXIoY2hlY2tvdXQudG90YWxTdW0pLFxyXG4gICAgICB0b3RhbFRheDogQ2FydEhlbHBlcnMuZ2V0Um91bmRlZE51bWJlcihjaGVja291dC50b3RhbFRheCksXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHByb2R1Y3RcclxuICAgKiBAcGFyYW0gaW1wb3J0VGF4XHJcbiAgICogQHJldHVybnMgcHJvZHVjdCBvYmplY3Qgd2l0aCBjYWxjdWxhdGVkIHByaWNlIGFuZCB0YXhlc1xyXG4gICAqL1xyXG4gIHN0YXRpYyBkZWNvcmF0ZVdpdGhUYXhlcyhwcm9kdWN0OiBJUHJvZHVjdCwgaW1wb3J0VGF4OiBudW1iZXIpOiBJUHJvZHVjdCB7XHJcbiAgICBjb25zdCByb3VuZGVkVGF4ID0gQ2FydEhlbHBlcnMuZ2V0Um91bmRlZFRheChwcm9kdWN0LCBpbXBvcnRUYXgpO1xyXG4gICAgY29uc3QgdG90YWxQcmljZSA9IHByb2R1Y3QucHJpY2UgKyByb3VuZGVkVGF4O1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4ucHJvZHVjdCxcclxuICAgICAgdGF4VmFsdWU6IHJvdW5kZWRUYXgsXHJcbiAgICAgIHByaWNlOiBDYXJ0SGVscGVycy5nZXRSb3VuZGVkTnVtYmVyKHRvdGFsUHJpY2UpLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSBwcm9kdWN0XHJcbiAgICogQHBhcmFtIGltcG9ydFRheFxyXG4gICAqIEByZXR1cm5zIHJvdW5kZWQgdGF4IGZvciBjdXJyZW50IHByb2R1Y3RcclxuICAgKi9cclxuICBzdGF0aWMgZ2V0Um91bmRlZFRheChwcm9kdWN0OiBJUHJvZHVjdCwgaW1wb3J0VGF4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgY29uc3QgdGF4VmFsdWUgPSAoTnVtYmVyKHByb2R1Y3QudGF4VmFsdWUpICtcclxuICAgICAgKHByb2R1Y3QuaXNJbXBvcnRlZCA/IGltcG9ydFRheCA6IDApKSAvIDEwMDtcclxuICAgIGNvbnN0IGZpbmFsVGF4ID0gcHJvZHVjdC5wcmljZSAqIHRheFZhbHVlO1xyXG4gICAgcmV0dXJuIE51bWJlcigoTWF0aC5jZWlsKGZpbmFsVGF4ICogMjApIC8gMjApLnRvRml4ZWQoMikpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIG51bWJlclxyXG4gICAqIEByZXR1cm5zIG51bWJlciByb3VuZGVkIHRvIDIgZGlnaXRzIGFmdGVyIGRvdFxyXG4gICAqL1xyXG4gIHN0YXRpYyBnZXRSb3VuZGVkTnVtYmVyKG51bWJlcjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKG51bWJlciAqIDEwMCkgLyAxMDA7XHJcbiAgfVxyXG59XHJcbiJdfQ==
