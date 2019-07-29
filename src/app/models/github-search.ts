import { GithubSearchResult } from './github-search-result';

export interface GithubSearch {
  incomplete_results: boolean;
  items: [GithubSearchResult];
  total_count: number;
}
