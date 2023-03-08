import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPlaceModalComponent } from './search-place-modal.component';

describe('SearchPlaceModalComponent', () => {
  let component: SearchPlaceModalComponent;
  let fixture: ComponentFixture<SearchPlaceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPlaceModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPlaceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
