import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductComponent}
    ]),
  HttpClientModule],
  exports: [ProductComponent]
})
export class ProductsModule {}

