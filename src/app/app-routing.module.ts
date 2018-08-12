import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '../../node_modules/@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: 'home',
    loadChildren:
      './home/home.module#HomeModule'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'services',
    loadChildren:
      './services/services.module#ServicesModule'

  },
  {
    path: 'contact',
    loadChildren:
      './contact/contact.module#ContactModule'
  },
  {
    path: 'about',
    loadChildren:
      './about/about.module#AboutModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    NgbModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
