import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { UserService } from '../_services/user.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class MemberEditResolver implements Resolve<User> {

    constructor(private authService : AuthService, 
        private alertify : AlertifyService, 
        private router: Router, 
        private userService :UserService) {}
    

    resolve(route:ActivatedRouteSnapshot): Observable<User>{

        return this.userService.getUser(this.authService.decodedToken.nameid) //instead of Id..accessing the current user using Token
        .pipe(
            catchError(error =>{
                this.alertify.error("Problem retrieving your data");
                this.router.navigate(['/members']);
                return of(null);
            })
        );

    }
}