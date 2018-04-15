import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  template: `
    <div class='center-container'>
      <div class='center-it'>
          <p class='p-header'>404</p>
          <p class='p-link' *ngIf='!user.LoginOK'><a class="nav-link" routerLink="/login">Login</a></p>
      </div>
    </div>
  `,
  styleUrls: ['./pnf.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(public user: UserService) { }

  ngOnInit() {
  }

}
