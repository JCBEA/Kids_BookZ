import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VtoonsComponent } from './vtoons.component';

describe('VtoonsComponent', () => {
  let component: VtoonsComponent;
  let fixture: ComponentFixture<VtoonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VtoonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VtoonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
