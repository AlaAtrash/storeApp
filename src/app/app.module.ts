import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BestPracticeComponent } from './best-practice/best-practice.component';
import { ProductComponent } from './products/product/product.component';
import { FormsModule } from '@angular/forms';
import { CommentModule } from './comments/comments.module';
import { ChuckComponent } from './chuck/chuck.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BestPracticeComponent,
    ProductComponent,
    ChuckComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommentModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
