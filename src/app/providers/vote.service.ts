import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LikeHate } from '../models/like-hate';
import { Vote } from '../models/vote';

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  baseUrl: string = "https://app-005f27d8-9033-48cc-ba69-b798464dee52.cleverapps.io/api/v2/votes"
  mesVotes: Vote[] = []

  private action = new Subject<Vote>();

  get actionObs(){
    return this.action.asObservable();
  }

  constructor(private http: HttpClient) {
    this.loadVotes()
  }

  list(): Vote[] {
    return this.mesVotes
  }

  loadVotes(){
    this.http.get<Vote[]>(this.baseUrl)
    .subscribe({
      next: (allVotes: Vote[]) => {
        for(const vote of allVotes){
          this.mesVotes.push(vote);
        }
      },
      error: err => {
        console.log(err);
      }
    })
  }

  addVote(vote:Vote){
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    this.http.post<Vote>(this.baseUrl,
      {
        pseudo: vote.colleague.pseudo,
        like_hate: vote.likeHate.toString()
      },
      httpOptions
    )
    .subscribe(() => {
      this.mesVotes.unshift(vote);
      this.action.next(vote);
      if(this.mesVotes.length > 10){
        this.mesVotes.pop();
      }
    })
  }

}
