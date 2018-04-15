import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';
import { NavComponent } from './cmps/nav/nav.component';
import { BdayComponent } from './cmps/pages/bday/bday.component';
import { OrtComponent } from './cmps/pages/ort/ort.component';
import { AutoComponent } from './cmps/pages/ort/auto/auto.component';
import { TrainComponent } from './cmps/pages/ort/train/train.component';
import { FaqComponent } from './cmps/pages/faq/faq.component';
import { QAComponent } from './cmps/pages/faq/qa/qa.component';
import { LoginComponent } from './cmps/login/login.component';
import { PageNotFoundComponent } from './cmps/pages/page-not-found/page-not-found.component';

import { UserService } from './services/user.service';
import { LoggedInGuard } from './guards/logged-in.guard';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRouterModule, BrowserAnimationsModule],
  declarations:
    [AppComponent, NavComponent, BdayComponent, OrtComponent, AutoComponent, TrainComponent, FaqComponent,
    QAComponent, LoginComponent, PageNotFoundComponent],
  providers: [LoggedInGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
