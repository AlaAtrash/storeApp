import { Component,  Input, Output } from '@angular/core';
import { CommentBlockService } from './comment-block.service'
@Component({
  selector: 'app-comments-block',
  templateUrl: './comments-block.component.html',
})
export class CommentsBlockComponent  {

  constructor(private commentBlockService: CommentBlockService) {}

  @Output() ii=this.commentBlockService.geti();
  @Output() jj=this.commentBlockService.getj();
  private addition=0;
  @Input()  commenter: string;

  @Input()  commente: string;

  @Input() commente_date:string;

  increaseNumbers= () => {
    this.commentBlockService.increase();
    this.ii=this.commentBlockService.geti();
    this.jj=this.commentBlockService.getj();
  }

  getAddition= () => {
    this.addition= this.commentBlockService.getAddition()
  }

}
