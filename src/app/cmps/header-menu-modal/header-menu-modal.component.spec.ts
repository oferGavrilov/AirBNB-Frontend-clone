import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMenuModalComponent } from './header-menu-modal.component';

describe('HeaderMenuModalComponent', () => {
  let component: HeaderMenuModalComponent;
  let fixture: ComponentFixture<HeaderMenuModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderMenuModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderMenuModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
