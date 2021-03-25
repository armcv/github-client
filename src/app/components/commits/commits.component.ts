import { Component, OnInit } from '@angular/core';
import { CommitsService } from '../../services/commits.service';
import { Commit, Commits } from '../../models/commit';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.css']
})
export class CommitsComponent implements OnInit {
  commits: Commits = [];
  constructor(private commitsService: CommitsService) { }

  ngOnInit(): void {
    this.commitsService.getCommits().then(res => {
      const { status, data } = res;
      if(status === 200){
        data.forEach((element: Commit) => {
          this.commits.push(element);
        });
      }

    });
  }

}
