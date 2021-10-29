import { TestBed } from '@angular/core/testing';

import { MainHomeService } from './main-home.service';

describe('MainHomeService', () => {
  let service: MainHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
