import { Component, OnInit } from '@angular/core';
import { Album } from '../model/Album';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: Album[];
  constructor(private blogservice: BlogService) { }

  ngOnInit() {
    this.onGetAlbums();
  }

  onGetAlbums() {
    this.blogservice.getAlbums()
      .subscribe(data => {
        if (data.status === 200) {
          this.albums = data.body;
          console.log(this.albums);
        }
      });
  }
}
