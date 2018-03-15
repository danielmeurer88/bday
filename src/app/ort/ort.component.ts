import { Component, OnInit } from '@angular/core';

import { AccessControlService } from '../access-control.service';

@Component({
  selector: 'app-ort',
  templateUrl: './ort.component.html',
  styleUrls: ['./ort.component.css']
})
export class OrtComponent implements OnInit {

  constructor(private acService : AccessControlService) {
    this.acService.test();
  }

  ngOnInit() {
  }

}
