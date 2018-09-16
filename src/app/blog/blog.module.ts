import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogMainComponent } from './blog-main/blog-main.component';
import { BlogRoutingModule} from './blog-routing.module'

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  declarations: [BlogMainComponent]
})
export class BlogModule { }
