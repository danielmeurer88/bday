import { Component, OnInit } from '@angular/core';

import {Md5} from 'ts-md5/dist/md5';

import { LoginReporterService } from '../login-reporter.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pwInput : string;
  loginOK : boolean = false;

  pws : string[] = [ 
    "098f6bcd4621d373cade4e832627b4f6" // test
   ];

  constructor(private reporter : LoginReporterService ) { }

  ngOnInit() {
  }

  loginHandler() {

    let hashedInput = Md5.hashStr( this.pwInput ).toString()

    let res = ( this.pws.indexOf( hashedInput ) >= 0 );

    this.reporter.loginSuccessful = res;

  }

}
