import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service'
import { Observable, Subscription } from 'rxjs'
import { catchError, tap } from 'rxjs/operators';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor(private productService: ProductService) {}

  getMyProducts():Subscription {
    return this.productService.getProducts().subscribe({
      next: products => {
        console.log(products)
      },
    })
  }



}
