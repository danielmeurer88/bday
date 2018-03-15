import { Component, OnInit } from '@angular/core';

import { AccessControlService } from './access-control.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  loginOK : boolean = false;

  constructor(public acService : AccessControlService) {
  }

  ngOnInit() {

  }

}
