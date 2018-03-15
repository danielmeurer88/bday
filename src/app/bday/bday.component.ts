import { Component, OnInit } from '@angular/core';

import { AccessControlService } from '../access-control.service';

@Component({
  selector: 'app-bday',
  templateUrl: './bday.component.html',
  styleUrls: ['./bday.component.css']
})
export class BdayComponent implements OnInit {

  constructor(private acService : AccessControlService) {
    acService.test();
  }

  ngOnInit() {
  }

}
