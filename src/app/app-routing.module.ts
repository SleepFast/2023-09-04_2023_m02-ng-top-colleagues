import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateColleagueReactivePage } from './pages/create-colleague-reactive/create-colleague-reactive.page';
import { CreateColleaguePage } from './pages/create-colleague/create-colleague.page';
import { WelcomePage } from './pages/welcome/welcome.page';
import { ColleagueDetailComponent } from './shared/components/colleague-detail/colleague-detail.component';
import { LoginPage } from './pages/login/login.page';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: 'template', component: CreateColleaguePage, canActivate: [AuthGuard] },
  { path: 'reactive', component: CreateColleagueReactivePage, canActivate: [AuthGuard] },
  { path: 'welcomePage', component: WelcomePage, canActivate: [AuthGuard] },
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'colleagues/:pseudo', component: ColleagueDetailComponent, canActivate: [AuthGuard] },
  { path:'login', component: LoginPage }
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
