import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceMainComponent } from './service-main/service-main.component';
import { WebComponent } from './web/web.component';

const routes: Routes = [
  {
    path:'',
    component: ServiceMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
