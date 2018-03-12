import { Injectable } from '@angular/core';

@Injectable()
export class LoginReporterService {

  private localStorageKey : string = "allowedAccess";

  private _loginSuccessful : boolean = false;
  get loginSuccessful() : boolean {
    return this._loginSuccessful;
  }
  set loginSuccessful(state : boolean) {
    let old = this._loginSuccessful;
    this._loginSuccessful = state;
    if (old !== state) {
      this.changed();
    }
  }

  private onchangeFunctions : Function[] = [];

  constructor() { }

  private changed() : void {
    for(let f of this.onchangeFunctions) {
      f(this.loginSuccessful);
    }
  }

  subscribe (f : Function ) : void {
    this.onchangeFunctions.push(f);
  }

  loggedIn () : void {
     window.localStorage.setItem(this.localStorageKey, "true");
  }

  loggedOut () : void {
    window.localStorage.setItem(this.localStorageKey, "false");
  }

  checkIfAccessAllowed () : boolean {
    let res = window.localStorage.getItem(this.localStorageKey);
    if (res === "true") {
      return true;
    } else {
      return false;
    }
  }

}
