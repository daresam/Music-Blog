import { Component, OnInit } from '@angular/core';
import { Post } from '../../../model/post';
import { Comment } from '../../../model/comment';
import { BlogService } from '../../../services/blog.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  loading: boolean; // To hide and show the spinner
  post: Post; // Store the post retrieved from the api
  id: number; // Store the id retrievd from the url 
  comments: Comment[]; // Store the all the comments retrieved from the api
  constructor(private blogService: BlogService,
    public router: Router, public route: ActivatedRoute) { }

  ngOnInit() {
    this.loading = true;
    this.id = this.route.snapshot.params['id'];
    this.getPost(this.id);
    this.getPostComments(this.id);
  }

  // Get a single post
  getPost(id) {
    this.blogService.getPost(id)
      .subscribe(data => {
        if (data.status === 200) {
          this.post = data.body;
        }
        if (data.status === 404) {
          this.post = null;
        }
      });
  }

  //  Get a single post with its respective comments
  getPostComments(id) {
    this.blogService.getPostComments(id)
      .subscribe(data => {
        if (data.status === 200) {
          this.loading = false;
          this.comments = data.body;
        }
      });
  }

}
