import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pwInput : string;
  loginOK : boolean = false;

  pws : string[] = ["test"];

  constructor() { }

  ngOnInit() {
  }

  loginHandler() {
    console.log( (this.pwInput) );
    // console.log( md5(this.pwInput) );

    this.loginOK = ( this.pws.indexOf(this.pwInput) >= 0 );
  }

}
