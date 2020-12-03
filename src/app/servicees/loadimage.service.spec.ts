import { TestBed } from '@angular/core/testing';

import { LoadimageService } from './loadimage.service';

describe('LoadimageService', () => {
  let service: LoadimageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadimageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
