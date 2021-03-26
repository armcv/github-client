import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommitsService } from '../../services/commits.service';
import { Commits } from '../../models/github';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.css']
})
export class CommitsComponent implements OnInit {
  commits: Commits = [];
  constructor(private commitsService: CommitsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const repo = this.route.snapshot.paramMap.get('repository');
    if(repo){
      this.commitsService.getCommits(repo).subscribe(res => {
        const { status, data } = res;
        if(status === 200){
          data.forEach((element) => {
            this.commits.push(element);
          });
        }
      });
    }
  }

}
