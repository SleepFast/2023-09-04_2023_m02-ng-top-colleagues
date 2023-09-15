import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../providers/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private router:Router, private authService:AuthService){

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.authService.isLoggedIn()){
      console.log("can activate");
      return true;
    } else {
      this.router.navigate(['/login']);
      console.log("cannot activate");
      return false;
    }
  }

};
