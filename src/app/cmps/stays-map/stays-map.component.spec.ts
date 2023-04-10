import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaysMapComponent } from './stays-map.component';

describe('StaysMapComponent', () => {
  let component: StaysMapComponent;
  let fixture: ComponentFixture<StaysMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaysMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaysMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
