import { TestBed } from '@angular/core/testing';

import { TokeninService } from './tokenin.service';

describe('TokeninService', () => {
  let service: TokeninService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokeninService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
