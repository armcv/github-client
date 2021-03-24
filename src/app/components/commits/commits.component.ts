import { Component, OnInit } from '@angular/core';
import { CommitsService } from '../../services/commits.service';
import { Commit } from '../../models/commit';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.css']
})
export class CommitsComponent implements OnInit {
  commits: Commit[] = [];
  faCheckCircle = faCheckCircle;
  constructor(private commitsService: CommitsService) { }

  ngOnInit(): void {
    this.commitsService.getCommits().then(res => {
      console.log(res);
      const { status, data } = res;
      if(status === 200){
        data.forEach((element: { commit?: any; sha?: any; committer?: any; }) => {
          let commit = new Commit();
          let {sha, committer } = element;
          commit.sha = sha;
          commit.commiter = element.commit.committer.name;
          commit.date = element.commit.committer.date;
          commit.message = element.commit.message;
          this.commits.push(commit);
        });
      }

    });
  }

}
