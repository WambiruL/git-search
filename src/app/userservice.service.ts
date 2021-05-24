import { environment } from './../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Repo } from './repo';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  foundUser: User;
  allRepos:Repo;

  constructor(private http: HttpClient) {
    this.foundUser=new User ("","","","",0,0,0,"", new Date);
    this.allRepos=new Repo("","","",new Date,0,0,"");
  }

  searchUser(searchName: string){

    interface Response{
      url:string;
      login:string;
      html_url:string;
      location:string;
      public_repos:number;
      followers:number;
      following:number;
      avatar_url:string;
      created_at:Date;
    }

    return new Promise<void>((resolve,reject)=>{
      this.http.get<Response>('https://api.github.com/users/{WambiruL}').toPromise().then(
        (result)=>{
          this.foundUser=result;
          console.log(this.foundUser);
          resolve();
        },
        (error)=>{
          console.log(error);
          reject();
        }
      )
    });
  }
  getRepos(searchName: string){
    interface Repos{

      name:string;
      html_url:string;
      description:string;
      forks:number;
      watchers_count: number;
      language:string;
      created_at:Date;
    }
    return new Promise<void>((resolve,reject)=>{
      this.http.get<Repo>('https://api.github.com/users/{WambiruL}').toPromise().then(
        (results)=>{
          this.allRepos=results;
          resolve();
        },
        (error)=>{
          console.log(error);
          reject();
        }
      )
    })
  }
}
