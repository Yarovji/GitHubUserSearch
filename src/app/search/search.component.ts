import { Component, OnInit, ViewChild } from '@angular/core';
import { GitHubSearchService } from '../git-hub-search.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { GithubSearchResult } from '../models/github-search-result';
import { Router } from '@angular/router';
import { GithubSearch } from '../models/github-search';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  form: FormGroup;
  users: GithubSearchResult[];
  displayedColumns: string[] = ['avatar_url'];
  dataSource: MatTableDataSource<GithubSearchResult>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private fb: FormBuilder,
    private githubService: GitHubSearchService,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      query: ['', Validators.required]
    });
  }

  search(): void {
    this.githubService.getUsers(this.form.value.query).subscribe((res: GithubSearch) => {
      this.users = res.items;
      this.dataSource = new MatTableDataSource<GithubSearchResult>(this.users);
      this.dataSource.paginator = this.paginator;
    });
  }

  getUser(userName: Element): void {
    this.router.navigate(['/user', userName]);
  }
}
