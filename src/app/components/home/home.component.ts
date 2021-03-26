import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  status: Number = 0;

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.githubService.apiStatus().subscribe(res => {
      this.status = res.status;
    })
  }

}
