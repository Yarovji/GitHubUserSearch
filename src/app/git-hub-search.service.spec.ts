import { TestBed } from '@angular/core/testing';

import { GitHubSearchService } from './git-hub-search.service';

describe('SearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitHubSearchService = TestBed.get(GitHubSearchService);
    expect(service).toBeTruthy();
  });
});
