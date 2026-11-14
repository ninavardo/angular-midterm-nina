import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { CartComponent } from './components/cart/cart';
import { ProductListComponent } from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, CartComponent, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
