import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsBlockComponent } from './comments-block.component';

xdescribe('CommentsBlockComponent', () => {
  let component: CommentsBlockComponent;
  let fixture: ComponentFixture<CommentsBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
