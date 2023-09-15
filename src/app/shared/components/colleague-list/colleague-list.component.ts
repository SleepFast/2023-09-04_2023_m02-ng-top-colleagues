import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Colleague } from 'src/app/models/colleague';
import { LikeHate } from 'src/app/models/like-hate';
import { Vote } from 'src/app/models/vote';
import { ColleagueService } from 'src/app/providers/colleague.service';

@Component({
  selector: 'app-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent implements OnInit{

  colleagueList: Colleague[] = []

  constructor(private colleagueService: ColleagueService) {
  }

  traiter(val: boolean) {
    if (val) {
      setTimeout(() => {
        this.loadList()
      }, 200);
    }
  }

  ngOnInit() {
    this.colleagueService.loadList()
    this.colleagueList = this.colleagueService.list()
  }

  loadList() {
    this.colleagueList = []
    this.colleagueService.getCollegues().subscribe((colleagues)=>{
      for(const colleague of colleagues){
        this.colleagueList.push(colleague);
      }
    })
  }
}
