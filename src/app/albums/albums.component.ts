import { Component, OnInit } from '@angular/core';
import { Album } from '../model/Album';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: Album[]; // Store all the albums from the api 
  loading: boolean; // To show and hide the spinner
  page = 1; // ngx-pagination property to indicate current
  paginator = { num: null }; // ngx-pagination count

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.paginator.num = 10;
    this.loading = true;
    this.onGetAlbums();
  }

  // Get all Albums from the api
  onGetAlbums() {
    this.blogService.getAlbums()
      .subscribe(data => {
        if (data.status === 200) {
          this.loading = false;
          this.albums = data.body;
        }
      });
  }
}
