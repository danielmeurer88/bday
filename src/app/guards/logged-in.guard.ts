import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { UserService } from '../services/user.service';

@Injectable()
export class LoggedInGuard implements CanActivate {

    constructor(private user: UserService, private router: Router) {}

    canActivate(): boolean {
        const res: boolean = this.user.read();
        console.log('LoggedInGuard says ' + (res) ? 'yes' : 'no');

        if (res === false) {
            this.router.navigate(['login']);
        }

        return res;
    }

}
