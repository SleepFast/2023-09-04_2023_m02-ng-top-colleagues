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

  ngOnInit() {
    this.colleagueService.getCollegues().subscribe((colleagues)=>{
      for(const colleague of colleagues){
        this.colleagueList.push(colleague);
      }
    })
  }
}
