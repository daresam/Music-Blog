import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Album } from '../../model/Album';
import { Photo } from '../../model/Photo';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  loading: boolean; // Hide and show the spinner
  album: Album; // Store a single album from the api
  id: number; // To store id retrieved from the url
  photos: Photo[]; // Store all the photos from the api
  constructor(private blogService: BlogService,
    public router: Router, public route: ActivatedRoute) { }

  ngOnInit() {
    this.loading = true;
    this.id = this.route.snapshot.params['id']; // Retrieve id from the url
    this.getAlbum(this.id); // get a single album
    this.getAlbumPhotos(this.id);  // get all an album with its respective photos
  }

  // Get a single album
  getAlbum(id) {
    this.blogService.getAlbum(id)
      .subscribe(data => {
        if (data.status === 200) {
          this.album = data.body;
        }
      });
  }

  // get an album with its respective photos
  getAlbumPhotos(id) {
    this.blogService.getAlbumPhotos(id)
      .subscribe(data => {
        if (data.status === 200) {
          this.loading = false;
          this.photos = data.body;
        }
      });
  }

}
