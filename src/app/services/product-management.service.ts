import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product } from '../models/product.model';

interface ProductsResponse {
  products: Product[];
}

@Injectable({
  providedIn: 'root',
})
export class ProductManagementService {
  private readonly http = inject(HttpClient);
  private readonly productsUrl = 'assets/data/products.json';

  getProducts(): Observable<Product[]> {
    return this.http
      .get<ProductsResponse>(this.productsUrl)
      .pipe(map((response) => response.products));
  }

  getProductImagePath(imageKey: string): string {
    return `assets/products/${imageKey}.png`;
  }

  parsePrice(price: string): number {
    return Number(price.replace('$', ''));
  }
}
