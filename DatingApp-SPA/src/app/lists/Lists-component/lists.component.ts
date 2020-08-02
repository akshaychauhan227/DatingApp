import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { Pagination, PaginatedResult } from 'src/app/_models/pagination';
import { UserService } from 'src/app/_services/user.service';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  users : User[];
  paginationData : Pagination;
  user: User = JSON.parse(localStorage.getItem('user'));
  likesParam : string;
  

  constructor(
    private userService: UserService, 
    private alertify: AlertifyService, 
    private route : ActivatedRoute) { }

  ngOnInit()
  {
    this.route.data.subscribe(
      data=> {
        this.users = data['listsResolver'].result;
        this.paginationData = data['listsResolver'].pagination;
      }
    );
    this.likesParam = "Likers";
  }

  loadUsers()
  {
      this.userService.getUsers(
      this.paginationData.currentPage, 
      this.paginationData.itemsPerPage, 
      null, this.likesParam)
      .subscribe(
      (data:PaginatedResult<User[]>) => 
              { 
                this.users = data.result;
                this.paginationData = data.pagination;
              },

      error=>{
        this.alertify.error(error);
            }
    )

  }

  pageChanged(event: any):void
  {
    this.paginationData.currentPage = event.page;
    this.loadUsers();
  }

}
