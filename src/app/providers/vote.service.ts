import { Injectable } from '@angular/core';
import { LikeHate } from '../models/like-hate';
import { Vote } from '../models/vote';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor() { }

  list(): Vote[] {
    const mesVotes: Array<Vote> =
    [
      {
        colleague : {
          pseudo: 'pouet',
          score: 500,
          photo: `https://picsum.photos/id/${Math.floor(Math.random()*40)}/200`
        },
        likeHate: LikeHate.LIKE
      },
      {
        colleague : {
          pseudo: 'pit',
          score: 500,
          photo: `https://picsum.photos/id/${Math.floor(Math.random()*40)}/200`
        },
        likeHate: LikeHate.HATE
      },
      {
        colleague : {
          pseudo: 'pit',
          score: 50,
          photo: `https://picsum.photos/id/${Math.floor(Math.random()*40)}/200`
        },
        likeHate: LikeHate.HATE
      },
      {
        colleague : {
          pseudo: 'pat',
          score: 500,
          photo: `https://picsum.photos/id/${Math.floor(Math.random()*40)}/200`
        },
        likeHate: LikeHate.HATE
      }
    ]

    return mesVotes
  }
}
