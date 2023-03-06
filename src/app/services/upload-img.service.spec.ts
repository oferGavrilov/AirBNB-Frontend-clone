import { TestBed } from '@angular/core/testing';

import { UploadImgService } from './upload-img.service';

describe('UploadImgService', () => {
  let service: UploadImgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadImgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
