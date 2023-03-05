import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmenitiesListComponent } from './amenities-list.component';

describe('AmenitiesListComponent', () => {
  let component: AmenitiesListComponent;
  let fixture: ComponentFixture<AmenitiesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmenitiesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmenitiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
