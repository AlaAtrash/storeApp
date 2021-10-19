import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BestPracticeComponent } from './best-practice/best-practice.component'
import { ProductComponent } from './products/product/product.component'
import { FormsModule } from '@angular/forms';
import { CommentModule } from './comments/comments.module'


@NgModule({
  declarations: [
    AppComponent,
    BestPracticeComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
