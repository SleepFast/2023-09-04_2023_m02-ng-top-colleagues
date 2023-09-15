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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirstLastValidatorDirective } from './validators/first-last-validator.directive';
import { PseudoValidatorDirective } from './validators/pseudo-validator.directive';
import { CreateColleagueReactiveFormsComponent } from './components/create-colleague-reactive-forms/create-colleague-reactive-forms.component';
import { CreateColleagueReactivePage } from '../pages/create-colleague-reactive/create-colleague-reactive.page';
import { ColleagueDetailComponent } from './components/colleague-detail/colleague-detail.component';
import { AppRoutingModule } from '../app-routing.module';
import { MenuComponent } from '../menu/menu.component';



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
    PseudoValidatorDirective,
    CreateColleagueReactiveFormsComponent,
    ColleagueDetailComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [
    LikeHateComponent,
    ColleagueComponent,
    ColleagueListComponent,
    VotingHistoryComponent,
    CounterComponent,
    CreateColleagueFormsComponent,
    CreateColleagueReactiveFormsComponent,
    ColleagueDetailComponent,
    MenuComponent
  ]
})
export class SharedModule { }
