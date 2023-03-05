import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmenitiesPreviewComponent } from './amenities-preview.component';

describe('AmenitiesPreviewComponent', () => {
  let component: AmenitiesPreviewComponent;
  let fixture: ComponentFixture<AmenitiesPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmenitiesPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmenitiesPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
