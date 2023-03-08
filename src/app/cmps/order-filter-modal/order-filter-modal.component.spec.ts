import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFilterModalComponent } from './order-filter-modal.component';

describe('OrderFilterModalComponent', () => {
  let component: OrderFilterModalComponent;
  let fixture: ComponentFixture<OrderFilterModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderFilterModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderFilterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
