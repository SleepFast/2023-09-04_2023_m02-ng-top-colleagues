import { Component, OnInit } from '@angular/core';
import { Colleague } from 'src/app/models/colleague';
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
        this.colleagueList = []
        this.loadList()
      }, 200);
    }
  }

  ngOnInit() {
    this.loadList()
  }

  loadList() {
    this.colleagueService.getCollegues().subscribe((colleagues)=>{
      for(const colleague of colleagues){
        this.colleagueList.push(colleague);
      }
    })
  }
}
