import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { tokenName } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit{
  
  RegisterForm : any;
  model: any = {};
  photoUrl : string
  constructor(public authService: AuthService, private alertify: AlertifyService, private router : Router) { }
  
  ngOnInit() {
    this.authService.currentPhotoUrl.subscribe(data =>this.photoUrl = data)
  }

  login()
  {
    this.authService.login(this.model)
    .subscribe(
    next => {
      this.alertify.success('Logged in successfully');  }, 

    error => {
      this.alertify.error('Failed to login');  },

    ()=> this.router.navigate(['/members']));

  }

  loggedIn()
  {
    this.RegisterForm=this.authService.loggedin()
    return (this.RegisterForm);
  }

  logout()
  {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.authService.decodedToken = null;
    this.authService.currentUser = null;
    this.alertify.message('logged out');
    this.router.navigate(['/home'])
  }
}
