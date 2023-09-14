import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Colleague } from '../models/colleague';
import { Observable } from "rxjs";
import { Vote } from "../models/vote";

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {
  baseUrl: string = "https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/colleagues"

  listColleagues: Colleague[] = []

  constructor(private http:HttpClient) {
    this.loadList();
  }

  list(): Colleague[] {
    return this.listColleagues
  }

  loadList(){
    this.http.get<Colleague[]>(this.baseUrl)
    .subscribe({
      next: (colleagues: Colleague[]) => {
        for(const colleague of colleagues){
          this.listColleagues.push(colleague);
        }
      },
      error: err => {
        console.log(err);
      }
    })
  }

  addColleague(colleague: Colleague) {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this.http.post<Colleague>(this.baseUrl,
      colleague,
      httpOptions
    ).subscribe()
  }

  getCollegues(): Observable<Colleague[]>{
    return this.http.get<Colleague[]>(this.baseUrl);
  }

  getColleagueByPseudo(pseudo: string) {
    return this.http.get<Colleague>(this.baseUrl + '/' +  pseudo)
  }

}
