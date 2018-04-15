import { Component, Output } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  pwInput: string;
  loginFailed = false;

  constructor(private router: Router, private user: UserService) {
  }

  loginHandler() {

    const input = this.pwInput.toString();

    if (this.user.login(input)) {
      this.router.navigate(['bday']);
    } else {
      this.showFailure();
    }
  }

  showFailure (): void {
    this.loginFailed = true;

    window.setTimeout( (that) => that.loginFailed = false, 2000, this );
  }

  onKeyUp(e) {
    if (e.code === 'Enter') {
      this.loginHandler();
    }
  }
}
