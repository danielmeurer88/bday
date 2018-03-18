import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { AccessControlService } from '../access-control.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  activeRoute : string = "";

  constructor(private acService : AccessControlService) {
  }

  ngOnInit() {
  }

  logout() : void {
    this.acService.write(false);
    this.acService.test("logged_out");
  }

}
