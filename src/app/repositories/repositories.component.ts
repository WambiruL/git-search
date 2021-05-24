import { UserserviceService } from './../userservice.service';
import { Repo } from '../repo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  repos!: Repo;

  constructor(public repoService: UserserviceService) { }

  repoSearch(searchName: string){
    this.repoService.getRepos(searchName).then(
      (results)=>{
        this.repos=this.repoService.allRepos
        console.log(this.repos);
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  ngOnInit(){
    this.repoSearch('WambiruL')
  }

}
