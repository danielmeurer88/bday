import { Component, OnInit } from '@angular/core';

import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor(private user: UserService) {
    this.user.test();
  }

  ngOnInit() {
  }

}
