import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

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
  getPosts(){
    const endPoint = `${this.url}post`;
    return this.http.get(endPoint, {headers: this.headers, observe: 'response'});
  }
}
