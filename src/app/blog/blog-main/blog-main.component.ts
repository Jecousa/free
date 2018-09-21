import { Component } from '@angular/core';
import { WordpressService, Wp } from '../../wordpress.service';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-blog-main',
  templateUrl: './blog-main.component.html',
  styleUrls: ['./blog-main.component.css'],
  providers: [WordpressService]
})
export class BlogMainComponent  {
  wp: Wp;
  headers: string[];

  constructor(private wordpressService: WordpressService){}

  showPosts(){
    this.wordpressService.getPosts()
    .subscribe((data: Wp) => this.wp = {
      postUrl: data['postUrl']
    });
  }
}