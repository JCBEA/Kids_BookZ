import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebCommentsComponent } from './web-comments.component';

describe('WebCommentsComponent', () => {
  let component: WebCommentsComponent;
  let fixture: ComponentFixture<WebCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebCommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
