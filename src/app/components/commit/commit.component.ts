import { Component, Input, OnInit } from '@angular/core';
import { Commit } from 'src/app/models/commit';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-commit',
  templateUrl: './commit.component.html',
  styleUrls: ['./commit.component.css']
})
export class CommitComponent implements OnInit {
  faCheckCircle = faCheckCircle;
  @Input() commit!: Commit;
  constructor() { }

  ngOnInit(): void {
  }

}
