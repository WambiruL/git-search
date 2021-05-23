import { UserserviceService } from './../userservice.service';
import { Repos } from './../repos';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  repo: Repos;

  constructor(public myService:UserserviceService, private repoService:UserserviceService) {
  }
    searchs(searchName){
      this.myService.searchUser(searchName).then(
        (success)=>{
          this.user=this.myService.foundUser;
        },
        (error)=>{
          console.log(error)
        }
      );
      this.repoService.getRepos(searchName).then(
        (results)=>{
          this.repo=this.repoService.allRepos
          console.log(this.repo);
        },

        (error)=>{
          console.log(error);
        }
      );
    }

  ngOnInit(){
    this.searchs('WambiruL')
  }

}
