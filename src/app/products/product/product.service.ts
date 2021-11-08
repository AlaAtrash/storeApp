import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Product } from './product.interface'
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(private http: HttpClient) {}

    private productUrl = 'api/products/products.json';
    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.productUrl)
          .pipe(
            tap(data => console.log('All: ', JSON.stringify(data))),
            catchError(this.handleError)
          );
      }


    private handleError(err: HttpErrorResponse):Observable<never> {
        let errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        return throwError(errorMessage);
    }
}