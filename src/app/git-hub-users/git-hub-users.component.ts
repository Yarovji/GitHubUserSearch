import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GitHubSearchService } from '../git-hub-search.service';
import { GithubSearchResult } from '../models/github-search-result';
import { GithubUser } from '../models/github-user';

@Component({
  selector: 'app-git-hub-users',
  templateUrl: './git-hub-users.component.html',
  styleUrls: ['./git-hub-users.component.scss']
})
export class GitHubUsersComponent implements OnInit {
  user: GithubUser;

  constructor(
    private githubService: GitHubSearchService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: { name: string }) => {
      this.getUser(params.name);
    });
  }

  getUser(username: string): void {
    this.githubService.getUserDetails(username).subscribe((userDetails: GithubSearchResult) => {
      this.user = userDetails;
    });
  }
}
