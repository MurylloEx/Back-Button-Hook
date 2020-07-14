import { TestBed } from '@angular/core/testing';

import { BackButtonHookService } from './back-button-hook.service';

describe('BackButtonHookService', () => {
  let service: BackButtonHookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackButtonHookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
