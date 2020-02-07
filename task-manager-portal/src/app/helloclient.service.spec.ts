import { TestBed } from '@angular/core/testing';

import { HelloClientService } from './helloclient.service';

describe('HelloClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HelloClientService = TestBed.get(HelloClientService);
    expect(service).toBeTruthy();
  });
});
