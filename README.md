# SHOP.CO — Angular Midterm

E-commerce product list and cart built with Angular to match the Figma design.

## Run

```bash
npm install
npm start
```

Open http://localhost:4200/

## Features

### Product List Page
- `ProductListComponent` + `ProductCardComponent`
- 9 products from `ProductManagementService`
- New and discount tags
- Add to Cart button on each card

### Cart
- `CartComponent` with item list and Order Summary
- Quantity +/- controls
- Remove item
- `CartManagementService` for cart state
- Totals: Subtotal, Discount (−20%), Delivery Fee ($15), Total

## Project structure

```
src/app/
  components/
    header/
    cart/
    product-list/
    product-card/
  services/
    product-management.service.ts
    cart-management.service.ts
  models/
    product.model.ts
public/assets/products/   # product images
```
