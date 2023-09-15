import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Colleague } from '../models/colleague';
import { ColleagueService } from './colleague.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private route:Router, private colleagueService: ColleagueService) {}

  login(pseudo:string, mdp:string){

    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };

    return this.http.post<Object>('https://app-005f27d8-9033-48cc-ba69-b798464dee52.cleverapps.io/api/v2/login',
      {
        pseudo: pseudo,
        password: mdp
      },
      httpOptions
    )
  }

  getUserLoggedIn(){
    return this.http.get<Colleague>('https://app-005f27d8-9033-48cc-ba69-b798464dee52.cleverapps.io/api/v2/current_user');
  }

  isLoggedIn(){

    if(localStorage.getItem("jwt")){
      return true;
    }
    return false;
  }

  logOut(){
    localStorage.removeItem("jwt");
    this.route.navigate(["/login"]);
  }
}
