import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(public router: Router){}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const user = JSON.parse(localStorage.getItem('user'));
      
      if(user == null){
        this.router.navigate(['home'])
          return window.confirm('אינך רשום עדיין! על מנת לבצע כניסה עליך לבצע כניסה ');
      }else if(user.role!='admin'){
        this.router.navigate(['home'])
         window.confirm('כניסת מנהל בלבד');
         return false
      }
      return true;
  }
  
}
