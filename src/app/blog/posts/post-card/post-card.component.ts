import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../../model/Post';
import { Comment } from '../../../model/comment';
import { BlogService } from '../../../services/blog.service';
import { User } from '../../../model/User';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  comments: Comment[]; // Store all the comments from the api
  @Input('post') post: Post; // Input post property
  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.post ? this.getPostComments(this.post.id) : '';
  }


  getPostComments(id) {
    this.blogService.getPostComments(id)
      .subscribe(data => {
        if (data.status === 200) {
          this.comments = data.body;
        }
      });
  }

}
