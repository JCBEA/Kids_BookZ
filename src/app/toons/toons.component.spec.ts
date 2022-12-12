import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToonsComponent } from "./ToonsComponent";

describe('ToonsComponent', () => {
  let component: ToonsComponent;
  let fixture: ComponentFixture<ToonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
