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

  loading: boolean;
  post: Post;
  id: number;
  comments: Comment[];
  constructor(private blogService: BlogService,
    public router: Router, public route: ActivatedRoute) { }

  ngOnInit() {
    this.loading = true;
    this.id = this.route.snapshot.params['id'];
    this.getPost(this.id);
    this.getPostComments(this.id);
  }

  getPost(id) {
    this.blogService.getPost(id)
      .subscribe(data => {
        if (data.status === 200) {
          this.post = data.body;
          // console.log(this.post);
        }
        if (data.status === 404) {
          this.post = null;
        }
      });
  }
  getPostComments(id) {
    this.blogService.getPostComments(id)
      .subscribe(data => {
        if (data.status === 200) {
          this.loading = false;
          this.comments = data.body;
          console.log(this.comments);
        }
      });
  }

}
