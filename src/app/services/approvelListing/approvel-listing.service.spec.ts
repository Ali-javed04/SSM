import { TestBed } from '@angular/core/testing';

import { ApprovelListingService } from './approvel-listing.service';

describe('ApprovelListingService', () => {
  let service: ApprovelListingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApprovelListingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
