import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { LoggedInGuard } from './logged-in-guard';

import { LoginComponent } from './login/login.component';
import { BdayComponent } from './bday/bday.component';
import { OrtComponent } from './ort/ort.component';
import { FaqComponent } from './faq/faq.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/bday', pathMatch: 'full' },
  { 
    path: 'bday',
    canActivate : [LoggedInGuard],
    component: BdayComponent
  },
  { 
    path: 'ort',
    canActivate : [LoggedInGuard],
    component: OrtComponent
  },
  { 
    path: 'faq',
    canActivate : [LoggedInGuard],
    component: FaqComponent
  },
  { 
    path: 'login',
    component: LoginComponent
  },
  { path: '**', component: PageNotFoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
