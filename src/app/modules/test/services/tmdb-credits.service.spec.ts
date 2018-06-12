import { TestBed, inject } from '@angular/core/testing';

import { TmdbCreditsService } from './tmdb-credits.service';

describe('TmdbCreditsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TmdbCreditsService]
    });
  });

  it('should be created', inject([TmdbCreditsService], (service: TmdbCreditsService) => {
    expect(service).toBeTruthy();
  }));
});
