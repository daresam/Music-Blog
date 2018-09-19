import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  // Set the headers
  headers = new HttpHeaders({ 'Content-Type': 'application/json'});

  // Set the default url
  url = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) {

  }
  // To fetch all posts
  getPosts() {
    const endPoint = `${this.url}posts`;
    return this.http.get<any>(endPoint, {headers: this.headers, observe: 'response'})
      .pipe(
        map(res => res)
      );
  }
  // To fetch all a single post
  getPost(id) {
    const endPoint = `${this.url}posts/${id}`;
    return this.http.get<any>(endPoint, {headers: this.headers, observe: 'response'})
      .pipe(
        map(res => res)
      );
  }

  // To fetch all comments
  getComments() {
    const endPoint = `${this.url}comments`;
    return this.http.get<any>(endPoint, {headers: this.headers, observe: 'response'})
      .pipe(
        map(res => res)
      );
  }
  // To fetch a post with its respective comments
  getPostComments(id) {
    const endPoint = `${this.url}posts/${id}/comments`;
    return this.http.get<any>(endPoint, {headers: this.headers, observe: 'response'})
      .pipe(
        map(res => res)
      );
  }
  // To fetch all users
  getUsers() {
    const endPoint = `${this.url}users`;
    return this.http.get<any>(endPoint, {headers: this.headers, observe: 'response'})
      .pipe(
        map(res => res)
      );
  }
  // To fetch a single user
  getUser(id) {
    const endPoint = `${this.url}users/${id}`;
    return this.http.get<any>(endPoint, {headers: this.headers, observe: 'response'})
      .pipe(
        map(res => res)
      );
  }
  // To fetch all albums
  getAlbums() {
    const endPoint = `${this.url}albums`;
    return this.http.get<any>(endPoint, {headers: this.headers, observe: 'response'})
      .pipe(
        map(res => res)
      );
  }

  // To fetch a single album
  getAlbum(id) {
    const endPoint = `${this.url}albums/${id}`;
    return this.http.get<any>(endPoint, {headers: this.headers, observe: 'response'})
      .pipe(
        map(res => res)
      );
  }
  // To fetch a album with its respective photos
  getAlbumPhotos(id) {
    const endPoint = `${this.url}albums/${id}/photos`;
    return this.http.get<any>(endPoint, {headers: this.headers, observe: 'response'})
      .pipe(
        map(res => res)
      );
  }

  // To fetch all photos
  getPhotos() {
    const endPoint = `${this.url}photos`;
    return this.http.get<any>(endPoint, {headers: this.headers, observe: 'response'})
      .pipe(
        map(res => res)
      );
  }
}
