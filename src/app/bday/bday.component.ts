import { Component, OnInit } from '@angular/core';

import { AccessControlService } from '../access-control.service';

import { UserService } from '../user.service';

@Component({
  selector: 'app-bday',
  templateUrl: './bday.component.html',
  styleUrls: ['./bday.component.css']
})
export class BdayComponent implements OnInit {

  _name : string;

  get Name () : string {
    return this.user.getName();
  }

  constructor(private acService : AccessControlService, private user : UserService) {
    acService.test();
  }

  ngOnInit() {
  }

}
