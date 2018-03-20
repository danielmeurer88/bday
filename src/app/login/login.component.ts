import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { PasswordUserAssociation } from '../password-user-association'

import { AccessControlService } from '../access-control.service';

import { UserService } from '../user.service';

import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pwInput : string;

  reason : UserReason = UserReason.StartedVisiting;

   puas : PasswordUserAssociation[] = [
     new PasswordUserAssociation("098f6bcd4621d373cade4e832627b4f6", 1, ["test"]),
     new PasswordUserAssociation("a155acabfd34d06a43956b34213c64cd", 1, ["Blümchen"])
   ];

  constructor(private acService : AccessControlService, private router : Router, private aroute : ActivatedRoute, private user : UserService) {
    this.aroute.params.subscribe(
      (param) => {
        
        if(param.code === "logged_out") {
          this.reason = UserReason.LoggedOut;
        }

        if(param.code === "access_denied") {
          this.reason = UserReason.AccessDenied;
        }

      }
    );
  }

  ngOnInit() {    
  }

  loginHandler() {

    const pua = this.getPasswordUserAssociationByPassword( this.pwInput );

    if ( pua !== null ) {
      this.user.Current = pua;
      this.acService.write(true);
      this.router.navigate(["/bday"]);
    } else {
      this.user.Current = new PasswordUserAssociation("", 1, ["Benutzer"]);
    }
    
  }

  getPasswordUserAssociationByPassword (pw : string) : PasswordUserAssociation {

    let hashedInput = Md5.hashStr( pw ).toString();
    console.log(pw, hashedInput);

    for(let pua of this.puas) {
      if (pua.PasswordHash === hashedInput) {
        return pua;
      }
    }
    return null;
  }

}

enum UserReason {
  StartedVisiting, LoggedOut, AccessDenied
}