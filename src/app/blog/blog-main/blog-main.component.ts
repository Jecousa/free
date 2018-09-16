import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../../wordpress.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-main',
  templateUrl: './blog-main.component.html',
  styleUrls: ['./blog-main.component.css']
})
export class BlogMainComponent  {

  posts$: Observable<any[]>;

  constructor(private wp: WordpressService){
    this.posts$ = this.wp.getPosts();
  }
}
