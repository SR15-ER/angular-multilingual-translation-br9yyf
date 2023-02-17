import { Injectable } from '@angular/core';
import{ ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router} from '@angular/router';
import { UserService} from './user.service'
import { AuthService} from './auth.service'
import { Location } from '@angular/common'
@Injectable(
  {
    providedIn:'root'
  }
)
export class AuthGuardService implements CanActivate {

  constructor(private _userService:UserService,private authService:AuthService,private router: Router,private _location:Location) { }
   canActivate(
    _next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ){
   
     let user: any = this.authService.LoginUser();
     let isAdmin=this._userService.isAdmin(user);
     if (user && isAdmin && state.url=== "/user-list") {
      return true;
     } else if(user && state.url !== "/user-list") {
     return true
    }else if(user && !isAdmin && state.url=== "/user-list"){
      this._location.back();
      return false
    }else if(!user) {
      this.router.navigate(['login']);
       return false
     }
  }
}