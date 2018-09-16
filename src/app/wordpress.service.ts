import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  constructor(private http: HttpClient) { }

  getPosts() {
    this.http.get('http://blog.5280free.com/wp-json/wp/v2/posts?_embed')
    .subscribe(data => {
      this.heading = data;
    });
  }
}
