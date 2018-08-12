import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { DetailComponent } from './detail/detail.component';
import { NgbModule } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    NgbModule
  ],
  declarations: [DetailComponent]
})
export class ContactModule { }
