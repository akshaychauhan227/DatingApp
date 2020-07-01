import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../_services/user.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  values: any;
  ifloggedIn: boolean;
  registerMode=false;

  constructor(private http:HttpClient, private userService : UserService, private authService : AuthService) { }

  ngOnInit() {
    this.getValues();
  }

  registerToggle()
  {
    this.registerMode=true;
  }

  getValues()
  {
    this.http.get('http://localhost:5000/api/values').subscribe(
      response => {this.values = response; },
      error => { console.log(error); }
      );

  }
  cancelRegisterMode(cancelRegister: boolean)
  {
    this.registerMode=cancelRegister;
  }

  loggedIn()
  {
    this.ifloggedIn = this.authService.loggedin();
    return (this.ifloggedIn);
   
  }

}
