import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStaysComponent } from './user-stays.component';

describe('UserStaysComponent', () => {
  let component: UserStaysComponent;
  let fixture: ComponentFixture<UserStaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserStaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserStaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
