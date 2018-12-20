import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderMainComponent } from './order-main/order-main.component';

@NgModule({
  imports: [
    CommonModule,
    OrderRoutingModule
  ],
  declarations: [OrderMainComponent]
})
export class OrderModule { }
