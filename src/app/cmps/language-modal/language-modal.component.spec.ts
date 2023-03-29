import { ComponentFixture, TestBed } from '@angular/core/testing';

import { languageModalComponent } from './language-modal.component';

describe('LanguageModalComponent', () => {
  let component: languageModalComponent;
  let fixture: ComponentFixture<languageModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ languageModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(languageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
