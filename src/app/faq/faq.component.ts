import { Component, OnInit } from '@angular/core';

import { AccessControlService } from '../access-control.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor(private acService : AccessControlService) {
    this.acService.test();
  }

  ngOnInit() {
  }

}
