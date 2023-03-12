import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StayOrderComponent } from './stay-order.component';

describe('StayOrderComponent', () => {
  let component: StayOrderComponent;
  let fixture: ComponentFixture<StayOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StayOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StayOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
