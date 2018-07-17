import { ShoppingCartItem } from "./shopping-cart-item";
import { Product } from "./product";

export class ShoppingCart {
    items: ShoppingCartItem[] = [];

    constructor(private itemsMap: {}) {
        this.itemsMap = itemsMap || {};
        for (let productId in this.itemsMap) {
            let item = itemsMap[productId];
            if (item) this.items.push(new ShoppingCartItem({
                ...item,
                key: productId,
            }));
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