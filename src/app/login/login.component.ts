import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { AccessControlService } from '../access-control.service';

import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pwInput : string;

  pws : string[] = [ 
    "098f6bcd4621d373cade4e832627b4f6" // test
   ];

  constructor(private acService : AccessControlService, private router : Router) {
    this.acService.test();
  }

  ngOnInit() {    
  }

  loginHandler() {

    let hashedInput = Md5.hashStr( this.pwInput ).toString();

    if ( this.pws.indexOf( hashedInput ) >= 0 ) {
      this.acService.write(true);
      this.router.navigate(["/bday"]);
    } else {
    }
    
  }

}
