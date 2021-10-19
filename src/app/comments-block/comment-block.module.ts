import { NgModule } from '@angular/core';
import { CommentsBlockComponent } from './comments-block.component';
import { LikeBtnComponent } from './like-btn.component'

@NgModule({
  declarations: [
    CommentsBlockComponent,
    LikeBtnComponent
  ],
  exports: [CommentsBlockComponent]
})
export class CommentsBlockModule { }
