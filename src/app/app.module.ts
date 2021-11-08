import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BestPracticeComponent } from './best-practice/best-practice.component'
import { FormsModule } from '@angular/forms';
import { CommentModule } from './comments/comments.module'
import { ProductsModule } from './products/product/products.module'
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    BestPracticeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommentModule,
    ProductsModule,
    MaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot([
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
