import { UserserviceService } from './../userservice.service';
import { Repo } from '../repo';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user!: User;
  repo!: Repo;

  constructor(public myService:UserserviceService, private repoService:UserserviceService) {
  }
    searchs(searchName: string){
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
