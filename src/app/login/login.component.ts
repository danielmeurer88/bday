import { Component, OnInit } from '@angular/core';

import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pwInput : string;
  loginOK : boolean = false;

  pws : string[] = [  ];

  constructor() { }

  ngOnInit() {
    console.log(Md5.hashStr("test").toString());
  }

  loginHandler() {
    console.log( (this.pwInput) );
    // console.log( md5(this.pwInput) );

    this.loginOK = ( this.pws.indexOf(this.pwInput) >= 0 );
  }

}
