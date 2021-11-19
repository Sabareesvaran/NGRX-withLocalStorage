import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { LoginState } from '../../../login/state/login.state';
import { SharedService } from '../shared.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  isAuthenticated = true;
  userDetails:Subscription
  constructor(
    private store:Store<{User:LoginState}>,
    private route: ActivatedRoute,
    private router:Router,
    private shared:SharedService
    ){}

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.isAuthenticated = this.shared.getToken()
      if(this.isAuthenticated){
        return true
      }else{
       this.router.navigate(['login'],{relativeTo:this.route})
      return false;
      }
  }

}
