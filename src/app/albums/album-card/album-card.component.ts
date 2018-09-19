import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../../model/Album';
import { BlogService } from '../../services/blog.service';
import { Photo } from '../../model/Photo';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.css']
})
export class AlbumCardComponent implements OnInit {

  @Input('album') album: Album; // album input property
  photos: Photo[] = []; // Store all the photos from the api
  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.album ? this.onGetAlbumPhotos(this.album) : null;
  }

  onGetAlbumPhotos(id) {
    this.blogService.getAlbumPhotos(id)
      .subscribe(data => {
        if (data.status === 200) {
          this.photos = data.body;
        }
      })
  }
}
