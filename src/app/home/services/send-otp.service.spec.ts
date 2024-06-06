import { TestBed } from '@angular/core/testing';

import { SendOTPService } from './send-otp.service';

describe('SendOTPService', () => {
  let service: SendOTPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendOTPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
