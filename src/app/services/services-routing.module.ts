import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceMainComponent } from './service-main/service-main.component';
import { WebComponent } from './web/web.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';

const routes: Routes = [
  {
    path:'',
    component: ServiceMainComponent
  },
  {
    path:'web',
    component: WebComponent
  },
  {
    path:'enterprise',
    component: EnterpriseComponent
  },
  {
    path:'marketing'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
