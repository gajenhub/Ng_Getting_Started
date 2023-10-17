import { Component } from '@angular/core';

@Component({
  selector: 'pm-product',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  pageTitle: string = 'Product List';
  products: any[] = [
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: '03/22/2023',
      description: 'Description...',
      price: 22.32,
      starRating: 3.3,
      imageUrl: 'assets/beach.jpg',
    },
    {
      productId: 3,
      productName: 'Hammer',
      productCode: 'GDN-0011',
      releaseDate: '03/25/2023',
      description: 'Description1...',
      price: 44.32,
      starRating: 13.3,
      imageUrl: 'assets/snow.jpg',
    },
  ];
}
