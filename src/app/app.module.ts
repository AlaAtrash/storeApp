import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BestPracticeComponent } from './best-practice/best-practice.component'
import { FormsModule } from '@angular/forms';
import { CommentModule } from './comments/comments.module'
import { ProductsModule } from './products/product/products.module'
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RxjsComponent } from './rxjs/rxjs/rxjs.component';
import { HttpClientModule } from '@angular/common/http'




@NgModule({
  declarations: [
    AppComponent,
    BestPracticeComponent,
    RxjsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CommentModule,
    ProductsModule,
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot([
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
