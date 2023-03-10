import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseIndicationComponent } from './purchase-indication.component';

describe('PurchaseIndicationComponent', () => {
  let component: PurchaseIndicationComponent;
  let fixture: ComponentFixture<PurchaseIndicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseIndicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseIndicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
