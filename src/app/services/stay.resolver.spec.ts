import { TestBed } from '@angular/core/testing';

import { StayResolver } from './stay.resolver';

describe('StayResolver', () => {
  let resolver: StayResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(StayResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
