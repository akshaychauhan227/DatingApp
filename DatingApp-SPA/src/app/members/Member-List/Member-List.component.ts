import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { User } from 'src/app/_models/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Member-List',
  templateUrl: './Member-List.component.html',
  styleUrls: ['./Member-List.component.css']
})
export class MemberListComponent implements OnInit {

users:User[];

  constructor(
    private userService: UserService, 
    private alertify: AlertifyService, 
    private route : ActivatedRoute) { }

  ngOnInit() {

    this.route.data.subscribe((data:User[])=>{this.users=data['usersResolver']})
    //this.loadUsers();
  }

  // loadUsers(){
  //   this.userService.getUsers().subscribe((users:User[])=>{
  //     this.users=users;
  //   },error => {
  //     this.alertify.error(error);
  //   });
  // }

}
