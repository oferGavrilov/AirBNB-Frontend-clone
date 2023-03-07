import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOrderComponent } from './user-order.component';

describe('UserOrderComponent', () => {
  let component: UserOrderComponent;
  let fixture: ComponentFixture<UserOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
