import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFilterModalComponent } from './header-filter-modal.component';

describe('HeaderFilterModalComponent', () => {
  let component: HeaderFilterModalComponent;
  let fixture: ComponentFixture<HeaderFilterModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderFilterModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderFilterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
