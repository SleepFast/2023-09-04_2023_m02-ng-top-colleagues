import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Colleague } from '../models/colleague';
import { Observable, Subject } from "rxjs";
import { Vote } from "../models/vote";

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {
  baseUrl: string = "https://app-005f27d8-9033-48cc-ba69-b798464dee52.cleverapps.io/api/v2/colleagues"

  listColleagues: Colleague[] = []

  public action = new Subject<number>();

  get actionObs(){
    return this.action.asObservable();
  }

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
    ).subscribe(() => {
      this.action.next(1)
    })
  }

  getCollegues(): Observable<Colleague[]>{
    return this.http.get<Colleague[]>(this.baseUrl);
  }

  getColleagueByPseudo(pseudo: string) {
    return this.http.get<Colleague>(this.baseUrl + '/' +  pseudo)
  }

}
