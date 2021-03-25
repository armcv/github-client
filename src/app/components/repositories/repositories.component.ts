import { Component, OnInit } from '@angular/core';
import { RepositoriesService } from '../../services/repositories.service';
import { Repository } from '../../models/repository';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  repositories: Repository[] = [];
  constructor(private repositoriesService: RepositoriesService) { }

  ngOnInit(): void {
    this.repositoriesService.getRepos().then(res => {
      console.log(res);
      const { status, data } = res;
      if (status === 200) {
        data.forEach((element) => {
          this.repositories.push(element as Repository);
        });
      }
    })
  }

}
