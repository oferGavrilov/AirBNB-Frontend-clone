import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWishlistComponent } from './user-wishlist.component';

describe('UserWishlistComponent', () => {
  let component: UserWishlistComponent;
  let fixture: ComponentFixture<UserWishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserWishlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
