import { Component, OnInit } from '@angular/core';
import { RepositoriesService } from '../../services/repositories.service';
import { Repositories } from '../../models/github';


@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  repositories: Repositories = [];

  constructor(private repositoriesService: RepositoriesService) { }

  ngOnInit(): void {
    this.repositoriesService.getRepos().subscribe(res => {
      const { status, data } = res;
      if (status === 200) {
        data.forEach((element) => {
          this.repositories.push(element);
        });
      }
    })
  }

}
