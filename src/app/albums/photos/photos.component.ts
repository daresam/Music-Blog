import { Component, OnInit, Input } from '@angular/core';
import { Photo } from '../../model/Photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  @Input('photos') photos: Photo[];
  loading: boolean; // To show and hide the spinner
  page = 1; // ngx-pagination property to indicate current
  paginator = { num: null }; // ngx-pagination count
  constructor() { }

  ngOnInit() {
    this.paginator.num = 10;
  }

}
