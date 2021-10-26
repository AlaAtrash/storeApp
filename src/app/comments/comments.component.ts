import { Component, OnInit } from '@angular/core';
import { CommentBlockService } from '../comments-block/comment-block.service'

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent  {
  user='Ala'
  text='commet de ala'

  constructor(private commentBlockService: CommentBlockService) {}

  increaseNumbers2= () => {
    this.commentBlockService.increase()
  }

  getAddition2= () => {
    this.commentBlockService.getAddition();
  }
}
