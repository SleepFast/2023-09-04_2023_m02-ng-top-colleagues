import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateColleagueReactivePage } from './pages/create-colleague-reactive/create-colleague-reactive.page';
import { CreateColleaguePage } from './pages/create-colleague/create-colleague.page';
import { WelcomePage } from './pages/welcome/welcome.page';
import { ColleagueDetailComponent } from './shared/components/colleague-detail/colleague-detail.component';

const routes: Routes = [
  { path: 'template', component: CreateColleaguePage },
  { path: 'reactive', component: CreateColleagueReactivePage },
  { path: 'welcomePage', component: WelcomePage },
  { path: '', pathMatch: 'full', redirectTo: 'welcomePage' },
  { path: 'colleagues/:pseudo', component: ColleagueDetailComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
