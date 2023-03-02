import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StayListComponent } from './stay-list.component';

describe('StayListComponent', () => {
  let component: StayListComponent;
  let fixture: ComponentFixture<StayListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StayListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
