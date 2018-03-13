import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pwInput : string;
  localStorageKey : string = "allowAccess";

  @Input() loginOK_Child : boolean;
  @Output() emitter : EventEmitter<boolean> = new EventEmitter<boolean>();

  pws : string[] = [ 
    "098f6bcd4621d373cade4e832627b4f6" // test
   ];

  constructor( ) { }

  ngOnInit() {

    if ( this.readLoggedInFromLocalStorage( ) ) {
      this.loginOK_Child = true;
      this.emitter.emit(this.loginOK_Child);
    }
    
  }

  loginHandler() {

    let hashedInput = Md5.hashStr( this.pwInput ).toString()

    if ( this.pws.indexOf( hashedInput ) >= 0 ) {
      this.loginOK_Child = true;
    } else {
      this.loginOK_Child = false;
    }
    
    this.writeLoggedInToLocalStorage(this.loginOK_Child);
    this.emitter.emit(this.loginOK_Child);

  }

  writeLoggedInToLocalStorage(bool : boolean) : void {
    localStorage.setItem(this.localStorageKey, bool.toString() );
  }

  readLoggedInFromLocalStorage() : boolean {
    let res = localStorage.getItem(this.localStorageKey);
    return (res === null || res === "false") ? false : true; 
  }

}
