import { Injectable } from '@angular/core';
import { Colleague } from '../models/colleague';

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {

  constructor() { }

  list(): Colleague[] {
    const mesColleagues: Array<Colleague> =
    [
      {
      pseudo: 'pouet',
      score: -999,
      photo: `https://picsum.photos/id/${Math.floor(Math.random()*40)}/200`
      },
      {
        pseudo: 'pit',
        score: 999,
        photo: `https://picsum.photos/id/${Math.floor(Math.random()*40)}/200`
      },
      {
        pseudo: 'pat',
        score: 999,
        photo: `https://picsum.photos/id/${Math.floor(Math.random()*40)}/200`
      },
      {
        pseudo: 'prout',
        score: 999,
        photo: `https://picsum.photos/id/${Math.floor(Math.random()*40)}/200`
      }
    ]

    return mesColleagues
  }
}
