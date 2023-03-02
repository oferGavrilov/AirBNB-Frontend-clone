import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StayFilterComponent } from './stay-filter.component';

describe('StayFilterComponent', () => {
  let component: StayFilterComponent;
  let fixture: ComponentFixture<StayFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StayFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StayFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
