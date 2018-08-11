import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'services',
    loadChildren:
    './services/services.module#ServicesModule'

  },
  {
    path:'contact',
    loadChildren:
    './contact/contact.module#ContactModule'
  },
  {
    path:'',
    redirectTo:'',
    pathMatch:'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
