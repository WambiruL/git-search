import { environment } from './../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Repos } from './repos';
import { Injectable } from '@angular/core';
import { resolve } from 'dns';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  foundUser: User;
  allRepos:Repos;

  constructor(private http: HttpClient) {
    this.foundUser=new User ("","","","",0,0,"", new Date);
    this.allRepos= new Repos("","","",new Date,0,0,"");
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
      this.http.get<Response>('https://api.github.com/users/'+searchName+'?access_token='+environment.apiKey).toPromise().then(
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

}
