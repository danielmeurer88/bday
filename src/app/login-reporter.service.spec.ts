import { TestBed, inject } from '@angular/core/testing';

import { LoginReporterService } from './login-reporter.service';

describe('LoginReporterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginReporterService]
    });
  });

  it('should be created', inject([LoginReporterService], (service: LoginReporterService) => {
    expect(service).toBeTruthy();
  }));
});
