import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { BdayComponent } from './bday/bday.component';
import { OrtComponent } from './ort/ort.component';
import { FaqComponent } from './faq/faq.component';

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
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
