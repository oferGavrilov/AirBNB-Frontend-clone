import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFilterComponent } from './header-filter.component';

describe('HeaderFilterComponent', () => {
  let component: HeaderFilterComponent;
  let fixture: ComponentFixture<HeaderFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
