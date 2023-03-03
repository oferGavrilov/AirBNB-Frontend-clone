import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StayDetailsComponent } from './stay-details.component';

describe('StayDetailsComponent', () => {
  let component: StayDetailsComponent;
  let fixture: ComponentFixture<StayDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StayDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
