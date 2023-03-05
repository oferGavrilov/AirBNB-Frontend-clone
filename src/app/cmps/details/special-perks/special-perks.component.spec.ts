import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialPreksComponent } from './special-preks.component';

describe('SpecialPreksComponent', () => {
  let component: SpecialPreksComponent;
  let fixture: ComponentFixture<SpecialPreksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialPreksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialPreksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
