import { UserserviceService } from './../userservice.service';
import { Repos } from './../repos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  repo: Repos;

  constructor(public repoService: UserserviceService) { }

  ngOnInit(): void {
  }

}
