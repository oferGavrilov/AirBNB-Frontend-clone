import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionModalComponent } from './region-modal.component';

describe('RegionModalComponent', () => {
  let component: RegionModalComponent;
  let fixture: ComponentFixture<RegionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
