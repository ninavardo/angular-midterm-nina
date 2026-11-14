import { Injectable, computed, signal } from '@angular/core';
import { CartItem, Product } from '../models/product.model';
import { ProductManagementService } from './product-management.service';

@Injectable({
  providedIn: 'root',
})
export class CartManagementService {
  private readonly cartItems = signal<CartItem[]>([]);
  private readonly deliveryFee = 15;
  private readonly cartDiscountRate = 0.2;

  readonly items = this.cartItems.asReadonly();

  readonly subtotal = computed(() =>
    this.cartItems().reduce((sum, item) => {
      return sum + this.productService.parsePrice(item.product.price) * item.quantity;
    }, 0)
  );

  readonly discount = computed(() => this.subtotal() * this.cartDiscountRate);

  readonly total = computed(() => {
    if (this.cartItems().length === 0) {
      return 0;
    }
    return this.subtotal() - this.discount() + this.deliveryFee;
  });

  readonly delivery = computed(() => (this.cartItems().length === 0 ? 0 : this.deliveryFee));

  readonly discountPercentLabel = computed(() => `-${this.cartDiscountRate * 100}%`);

  constructor(private readonly productService: ProductManagementService) {}

  addToCart(product: Product): void {
    this.cartItems.update((items) => {
      const existing = items.find((item) => item.product.id === product.id);
      if (existing) {
        return items.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...items, { product, quantity: 1 }];
    });
  }

  removeFromCart(productId: string): void {
    this.cartItems.update((items) => items.filter((item) => item.product.id !== productId));
  }

  increaseQuantity(productId: string): void {
    this.cartItems.update((items) =>
      items.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  decreaseQuantity(productId: string): void {
    this.cartItems.update((items) =>
      items
        .map((item) =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  formatCurrency(amount: number): string {
    return `$${Math.round(amount)}`;
  }
}
