import { TestBed } from '@angular/core/testing';

import { StayService } from './stay.service';

describe('StayService', () => {
  let service: StayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
