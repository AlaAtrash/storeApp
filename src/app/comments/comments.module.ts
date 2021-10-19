import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { CommentsComponent } from './comments.component';
import { CommentsBlockModule } from '../comments-block/comment-block.module'

@NgModule({
  declarations: [
    CommentsComponent,
  ],
  providers: [],
  imports: [CommentsBlockModule, BrowserModule],
  exports: [CommentsComponent]
})
export class CommentModule { }
