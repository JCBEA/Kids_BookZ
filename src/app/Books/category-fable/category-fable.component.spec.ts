import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryFableComponent } from './category-fable.component';

describe('CategoryFableComponent', () => {
  let component: CategoryFableComponent;
  let fixture: ComponentFixture<CategoryFableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryFableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryFableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
