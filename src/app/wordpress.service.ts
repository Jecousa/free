import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Wp{
  postUrl: string;
}

@Injectable()
export class WordpressService {

  wpUrl= 'https://blog.5280free.com/wp-json/wp/v2/posts?'

  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get(this.wpUrl);

  }

  
  
}
