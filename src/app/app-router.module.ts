import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BdayComponent } from './cmps/pages/bday/bday.component';
import { OrtComponent } from './cmps/pages/ort/ort.component';
import { FaqComponent } from './cmps/pages/faq/faq.component';
import { PageNotFoundComponent } from './cmps/pages/page-not-found/page-not-found.component';

import { LoginComponent } from './cmps/login/login.component';

import { LoggedInGuard } from './guards/logged-in.guard';

const APP_ROUTES: Routes = [

  {
    path : '',
    redirectTo : 'bday',
    pathMatch : 'full'
  },

  {
    path : 'bday',
    component : BdayComponent,
    canActivate : [LoggedInGuard]
  },

  {
    path : 'ort',
    component : OrtComponent,
    canActivate : [LoggedInGuard]
  },

  {
    path : 'faq',
    component : FaqComponent,
    canActivate : [LoggedInGuard]
  },

  {
    path : 'login',
    component : LoginComponent
  },

  {
    path : '**',
    component : PageNotFoundComponent
  }
];

@NgModule({
  imports : [ RouterModule.forRoot(APP_ROUTES) ],
  exports: [ RouterModule]
})
export class AppRouterModule {}
