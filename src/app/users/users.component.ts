import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  loading: boolean; // To show and hide the spinner
  users: User[]; // Store all users fetch from the api
  user: User; // Store a user
  page = 1; // ngx-pagination property to indicate current page
  paginator = { num: null }; // ngx-pagination count

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.loading = true;
    this.paginator.num = 10;
    this.onGetUsers();
  }

  // Get all Users fro the api
  onGetUsers() {
    this.blogService.getUsers()
      .subscribe(data => {
        if (data.status === 200) {
          this.loading = false;
          this.users = data.body;
        }
      });
  }
  
  triggerView(user: User) {
    this.user = user;
  }

}
