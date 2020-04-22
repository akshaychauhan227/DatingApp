import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { tokenName } from '@angular/compiler';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit{
  RegisterForm : any;
  @Output() DontShowRegisterForm = new EventEmitter<boolean>();
  model: any = {};
  constructor(public authService: AuthService, private alertify: AlertifyService) { }
  ngOnInit() {
  }

  login()
  {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Logged in successfully');
      
    }, error => {
      this.alertify.error('Failed to login');
    });

    
  }

  loggedIn()
  {
    this.RegisterForm=this.authService.loggedin()
    this.DontShowRegisterForm.emit(this.RegisterForm);
      console.log("its is" + this.RegisterForm);
      return (this.RegisterForm);
  }

  logout()
  {
    localStorage.removeItem('token');
    this.alertify.message('logged out');
  }
}
