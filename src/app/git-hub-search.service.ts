import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GithubSearchResult } from './models/github-search-result';
import { GithubSearch } from './models/github-search';

@Injectable({
  providedIn: 'root'
})
export class GitHubSearchService {

  constructor(private http: HttpClient) {}

  baseUrl = 'https://api.github.com/search/users?q=';
  queryUrl = 'https://api.github.com/users/';

  getUsers(userName: string): Observable <GithubSearch> {
      return this.http.get<GithubSearch>(`${this.baseUrl}${userName}`);
  }

  getUserDetails(userName: string): Observable <GithubSearchResult> {
    return this.http.get<GithubSearchResult>(`${this.queryUrl}${userName}`);
  }
}
