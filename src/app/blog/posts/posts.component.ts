import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Post } from '../../model/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  loading: boolean; // To show and hide the spinner
  posts: Post[] = []; // Store all the posts from the api  
  page = 1; // ngx-pagination property to indicate current
  paginator = { num: null }; // ngx-pagination count

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.paginator.num = 10;
    this.loading = true;
    this.onGetPosts();
  }

  // Load all posts from the api
  onGetPosts() {
    this.blogService.getPosts()
      .subscribe(data => {
        if (data.body.length > 0) {
          this.loading = false;
          this.posts = data.body;
        }
      });
  }
  

}
