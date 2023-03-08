import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestModalComponent } from './guest-modal.component';

describe('GuestModalComponent', () => {
  let component: GuestModalComponent;
  let fixture: ComponentFixture<GuestModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
