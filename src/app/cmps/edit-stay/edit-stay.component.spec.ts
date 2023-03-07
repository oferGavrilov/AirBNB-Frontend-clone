import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStayComponent } from './edit-stay.component';

describe('EditStayComponent', () => {
  let component: EditStayComponent;
  let fixture: ComponentFixture<EditStayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditStayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
