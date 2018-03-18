import { Router, CanActivate } from "@angular/router";
import { AccessControlService } from './access-control.service';
import { Injectable } from "@angular/core";

@Injectable()
export class LoggedInGuard implements CanActivate {

    constructor(private acService : AccessControlService, private router : Router) {}
    
    canActivate() : boolean {
        let res : boolean = this.acService.read();
        
        let answer = (res) ? "yes" : "no";
        console.log("LoggedInGuard says " + answer);
        
        if (res === false) {
            this.router.navigate(["/login/access_blocked"]);
        }
        
        return res;
    }

}