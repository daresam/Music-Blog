import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../../model/Comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input('comments') comments: Comment[]; // Receive array of comments from the parent component
  constructor() { }

  ngOnInit() {
  }

}
