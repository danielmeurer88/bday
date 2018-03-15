import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { BdayComponent } from './bday/bday.component';
import { OrtComponent } from './ort/ort.component';
import { FaqComponent } from './faq/faq.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/bday', pathMatch: 'full' },
  { 
    path: 'bday',
    component: BdayComponent
  },
  { 
    path: 'ort',
    component: OrtComponent
  },
  { 
    path: 'faq',
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
