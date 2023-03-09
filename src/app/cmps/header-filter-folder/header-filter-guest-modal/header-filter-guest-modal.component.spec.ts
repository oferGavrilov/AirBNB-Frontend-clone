import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFilterGuestModalComponent } from './header-filter-guest-modal.component';

describe('HeaderFilterGuestModalComponent', () => {
  let component: HeaderFilterGuestModalComponent;
  let fixture: ComponentFixture<HeaderFilterGuestModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderFilterGuestModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderFilterGuestModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
