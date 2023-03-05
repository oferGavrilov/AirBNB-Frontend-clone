import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewPreviewComponent } from './review-preview.component';

describe('ReviewPreviewComponent', () => {
  let component: ReviewPreviewComponent;
  let fixture: ComponentFixture<ReviewPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
