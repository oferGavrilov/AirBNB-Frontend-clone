import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgCarouselComponent } from './img-carousel.component';

describe('ImgCarouselComponent', () => {
  let component: ImgCarouselComponent;
  let fixture: ComponentFixture<ImgCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
