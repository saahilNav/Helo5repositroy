import { TestBed } from '@angular/core/testing';

import { DdkService } from './ddk.service';

describe('DdkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DdkService = TestBed.get(DdkService);
    expect(service).toBeTruthy();
  });
});
