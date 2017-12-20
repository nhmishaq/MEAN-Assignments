import { TestBed, inject } from '@angular/core/testing';

import { MyServService } from './my-serv.service';

describe('MyServService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyServService]
    });
  });

  it('should be created', inject([MyServService], (service: MyServService) => {
    expect(service).toBeTruthy();
  }));
});
