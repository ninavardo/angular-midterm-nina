import { Component, inject } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card';
import { ProductManagementService } from '../../services/product-management.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductListComponent {
  private readonly productService = inject(ProductManagementService);

  readonly products: Product[] = this.productService.getProducts();
}
