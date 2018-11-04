import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { NgbModule } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { ServiceMainComponent } from './service-main/service-main.component';
import { ServicesDetailComponent } from './services-detail/services-detail.component';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    ServicesRoutingModule
  ],
  declarations: [ ServiceMainComponent, ServicesDetailComponent]
})
export class ServicesModule { }
