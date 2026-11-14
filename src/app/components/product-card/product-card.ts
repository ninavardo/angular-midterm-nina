import { Component, Input, inject } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductManagementService } from '../../services/product-management.service';
import { CartManagementService } from '../../services/cart-management.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;

  private readonly productService = inject(ProductManagementService);
  private readonly cartService = inject(CartManagementService);

  get imagePath(): string {
    return this.productService.getProductImagePath(this.product.image);
  }

  get fullStars(): number[] {
    return Array.from({ length: Math.floor(this.product.rating) }, (_, i) => i);
  }

  get hasHalfStar(): boolean {
    return this.product.rating % 1 !== 0;
  }

  get emptyStars(): number[] {
    return Array.from({ length: 5 - Math.ceil(this.product.rating) }, (_, i) => i);
  }

  get ratingLabel(): string {
    const value =
      this.product.rating % 1 === 0 ? `${this.product.rating}.0` : `${this.product.rating}`;
    return `${value}/5`;
  }

  get halfStarGradientId(): string {
    return `halfStar-${this.product.id}`;
  }

  addToCart(): void {
    this.cartService.addToCart(this.product);
  }
}
