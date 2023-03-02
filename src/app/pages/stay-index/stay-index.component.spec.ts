import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StayIndexComponent } from './stay-index.component';

describe('StayIndexComponent', () => {
  let component: StayIndexComponent;
  let fixture: ComponentFixture<StayIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StayIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StayIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
