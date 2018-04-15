import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-bday',
  templateUrl: './bday.component.html',
  styleUrls: ['./bday.component.css']
})
export class BdayComponent implements OnInit {

  constructor(public user: UserService) {
    user.test();
  }

  ngOnInit() {
  }

}
