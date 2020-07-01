import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
constructor(
  private authService: AuthService,
  private alertify : AlertifyService, 
  private router: Router)
  {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

      if(this.authService.loggedin()){
        return true;
      }
      this.alertify.error("You Shall Not Pass!!");
      this.router.navigate(['/home']);
      return false;
  }
  
}
