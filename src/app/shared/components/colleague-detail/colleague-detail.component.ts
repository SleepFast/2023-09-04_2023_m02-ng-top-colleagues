import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Colleague } from 'src/app/models/colleague';
import { ColleagueService } from 'src/app/providers/colleague.service';

@Component({
  selector: 'app-colleague-detail',
  templateUrl: './colleague-detail.component.html',
  styleUrls: ['./colleague-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ColleagueDetailComponent {

  pseudo: string | null = "";

  colleague!: Colleague;

  constructor(private route: ActivatedRoute, private colleagueService: ColleagueService) {
    this.pseudo = this.route.snapshot.paramMap.get("pseudo");
    if (this.pseudo != null) {
      this.colleagueService.getColleagueByPseudo(this.pseudo)
        .subscribe(colleague => {
          this.colleague = colleague;
      });
    }
  }
}
