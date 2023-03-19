import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LagnuageModalComponent } from './lagnuage-modal.component';

describe('LagnuageModalComponent', () => {
  let component: LagnuageModalComponent;
  let fixture: ComponentFixture<LagnuageModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LagnuageModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LagnuageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
