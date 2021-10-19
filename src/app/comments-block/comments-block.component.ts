import { Component,  Input, Output } from '@angular/core';

@Component({
  selector: 'app-comments-block',
  templateUrl: './comments-block.component.html',
})
export class CommentsBlockComponent  {
  constructor() {}

  @Input()  commenter: string;

  @Input()  commente: string;

  @Input() commente_date:string;

}
