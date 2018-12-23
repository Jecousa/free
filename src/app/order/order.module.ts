import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderMainComponent } from './order-main/order-main.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderQuestionsComponent } from './order-questions/order-questions.component';

@NgModule({
  imports: [
    CommonModule,
    OrderRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [OrderMainComponent, OrderDetailComponent, OrderQuestionsComponent]
})
export class OrderModule { }
