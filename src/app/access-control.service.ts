import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { all } from 'q';

@Injectable()
export class AccessControlService {

  private key : string = "allowAccess";

  public LoginOK : boolean = false;

  constructor(private router: Router) { }

  test (optStr : string = null) : void {
    if (this.read() !== true) {

      let code = "no_access_allowed";

      if (typeof optStr === "string") {
        code = optStr;
      }

      this.router.navigate(['/login/' + code]);
    }
  }

  write( allowed : boolean = false ) : void {
    localStorage.setItem(this.key,  allowed.toString() );
    this.LoginOK = allowed;
  }

  read () : boolean {
    let res = localStorage.getItem(this.key);
    return  (this.LoginOK = (res === "true"));
  }

}
