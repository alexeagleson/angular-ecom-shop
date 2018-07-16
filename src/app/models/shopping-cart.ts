import { ShoppingCartItem } from "./shopping-cart-item";
import { Product } from "./product";

export class ShoppingCart {
    items: ShoppingCartItem[] = [];

    constructor(public itemsMap: {}) {
        for (let productId in this.itemsMap) {
            let item = itemsMap[productId];
            this.items.push(new ShoppingCartItem(item.product, item.quantity));
        }
    }

    getQuantity(product: Product) {
        let item = this.itemsMap[product.key];
        return item ? item.quantity : 0;
      }

    get productIds() {
        return Object.keys(this.itemsMap);
    }

    get totalItemsCount() {
        let initialValue = 0;
        return this.items.reduce((accumulator, cartItem) => accumulator + cartItem.quantity, initialValue);
    }

    get totalPrice() {
        let initialValue = 0;
        return this.items.reduce((accumulator, cartItem) => accumulator + cartItem.totalPrice, initialValue);
    }
}