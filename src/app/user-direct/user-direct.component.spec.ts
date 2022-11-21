import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDirectComponent } from './user-direct.component';

describe('UserDirectComponent', () => {
  let component: UserDirectComponent;
  let fixture: ComponentFixture<UserDirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDirectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
