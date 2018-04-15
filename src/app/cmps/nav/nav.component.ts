import { Component } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(private user: UserService) {}

  logout(): void {
    this.user.write(false);
    this.user.test();
  }

}
