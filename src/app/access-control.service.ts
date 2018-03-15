import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { all } from 'q';

@Injectable()
export class AccessControlService {

  private key : string = "allowAccess";

  public LoginOK : boolean = false;

  constructor(private router: Router) { }

  test () : void {
    if (this.read() !== true) {
      this.router.navigate(['/login']);
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
