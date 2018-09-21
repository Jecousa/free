import { Component } from '@angular/core';
import { WordpressService, Wp } from '../../wordpress.service';
import { Observable } from 'rxjs';
import { HttpResponse, HttpParams, HttpClient } from '@angular/common/http';

export interface Post{
  id: number;
}

@Component({
  selector: 'app-blog-main',
  templateUrl: './blog-main.component.html',
  styleUrls: ['./blog-main.component.css'],
})

export class BlogMainComponent  {
  readonly wpUrl= 'https://blog.5280free.com/wp-json/wp/v2/posts';

  posts: Observable<any>;

  constructor(private http: HttpClient){}

  getPosts(){
    let params = new HttpParams().set('id', '1');
    this.posts = this.http.get(this.wpUrl , { params})
  }
}
