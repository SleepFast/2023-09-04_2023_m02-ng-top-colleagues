import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeHateComponent } from './components/like-hate/like-hate.component';
import { ColleagueComponent } from './components/colleague/colleague.component';
import { ColleagueListComponent } from './components/colleague-list/colleague-list.component';
import { ScorePipe } from './pipes/score.pipe';
import { VotingHistoryComponent } from './components/voting-history/voting-history.component';
import { WelcomeModule } from '../pages/welcome/welcome.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    LikeHateComponent,
    ColleagueComponent,
    ColleagueListComponent,
    ScorePipe,
    VotingHistoryComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LikeHateComponent,
    ColleagueComponent,
    ColleagueListComponent,
    VotingHistoryComponent
  ]
})
export class SharedModule { }
