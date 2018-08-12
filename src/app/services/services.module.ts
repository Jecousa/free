import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { WebComponent } from './web/web.component';
import { NgbModule } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { ServiceMainComponent } from './service-main/service-main.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { WebDetailComponent } from './web/web-detail/web-detail.component';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    ServicesRoutingModule
  ],
  declarations: [WebComponent, ServiceMainComponent, EnterpriseComponent, WebDetailComponent]
})
export class ServicesModule { }
