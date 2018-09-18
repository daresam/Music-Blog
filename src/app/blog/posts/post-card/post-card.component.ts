import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../../model/Post';
import { Comment } from '../../../model/comment';
import { BlogService } from '../../../services/blog.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  comments: Comment[];
  @Input('post') post: Post;
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
