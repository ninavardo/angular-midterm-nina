import { Component, inject } from '@angular/core';
import { CartManagementService } from '../../services/cart-management.service';
import { ProductManagementService } from '../../services/product-management.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class CartComponent {
  readonly cartService = inject(CartManagementService);
  private readonly productService = inject(ProductManagementService);

  getImagePath(imageKey: string): string {
    return this.productService.getProductImagePath(imageKey);
  }

  increase(productId: string): void {
    this.cartService.increaseQuantity(productId);
  }

  decrease(productId: string): void {
    this.cartService.decreaseQuantity(productId);
  }

  remove(productId: string): void {
    this.cartService.removeFromCart(productId);
  }
}
