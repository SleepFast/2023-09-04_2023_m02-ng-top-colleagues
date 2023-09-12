import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeHateComponent } from './components/like-hate/like-hate.component';
import { ColleagueComponent } from './components/colleague/colleague.component';
import { ColleagueListComponent } from './components/colleague-list/colleague-list.component';
import { ScorePipe } from './pipes/score.pipe';
import { VotingHistoryComponent } from './components/voting-history/voting-history.component';
import { WelcomeModule } from '../pages/welcome/welcome.module';
import { HttpClientModule } from '@angular/common/http';
import { CounterComponent } from './components/counter/counter.component';
import { CreateColleagueFormsComponent } from './components/create-colleague-forms/create-colleague-forms.component';
import { FormsModule } from '@angular/forms';
import { FirstLastValidatorDirective } from './validators/first-last-validator.directive';



@NgModule({
  declarations: [
    LikeHateComponent,
    ColleagueComponent,
    ColleagueListComponent,
    ScorePipe,
    VotingHistoryComponent,
    CounterComponent,
    CreateColleagueFormsComponent,
    FirstLastValidatorDirective,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LikeHateComponent,
    ColleagueComponent,
    ColleagueListComponent,
    VotingHistoryComponent,
    CounterComponent,
    CreateColleagueFormsComponent
  ]
})
export class SharedModule { }
