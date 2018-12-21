import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';

import { HomeRoutingModule } from './home-routing.module';
import { HomeMainComponent } from './home-main/home-main.component';
import { HomeDetailComponent } from './home-detail/home-detail.component';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [HomeMainComponent, HomeDetailComponent]
})
export class HomeModule { }
