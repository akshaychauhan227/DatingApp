import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { User } from 'src/app/_models/user';
import { ActivatedRoute } from '@angular/router';
import { Pagination, PaginatedResult } from 'src/app/_models/pagination';

@Component({
  selector: 'app-Member-List',
  templateUrl: './Member-List.component.html',
  styleUrls: ['./Member-List.component.css']
})
export class MemberListComponent implements OnInit {

users:User[];
user: User = JSON.parse(localStorage.getItem('user'));
genderList = [{value:'male',display:'Males'},{value:'female',display:'Females'}];
paginationData : Pagination;
userParams : any = {}


  constructor(
    private userService: UserService, 
    private alertify: AlertifyService, 
    private route : ActivatedRoute) { }

  ngOnInit() {

    this.route.data.subscribe(
      data=>{
        this.users=data['usersResolver'].result;
        this.paginationData = data['usersResolver'].pagination;
    });

    //whenever the page loads this wud be the default filter
    this.userParams.gender = this.user.gender =='female'? 'male':'female';
    this.userParams.minAge = 18;
    this.userParams.maxAge = 99;
    this.userParams.orderBy = 'lastActive'
    
  }

  resetFilter(){ // again if u want to make the filter default
    this.userParams.gender = this.user.gender =='female'? 'male':'female';
    this.userParams.minAge = 18;
    this.userParams.maxAge = 99;
    this.userParams.orderBy = 'lastActive';
    this.loadUsers();
  }

  pageChanged(event: any):void
  {
    this.paginationData.currentPage = event.page;
    this.loadUsers();
  }

  loadUsers()
  {
    this.userService.getUsers(this.paginationData.currentPage,this.paginationData.itemsPerPage, this.userParams)
    .subscribe(
      (res:PaginatedResult<User[]>)=>{
      this.users=res.result;
      this.paginationData=res.pagination;
    },error => {
      this.alertify.error(error);
    });
  }

}
