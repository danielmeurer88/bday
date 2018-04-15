import { Component, Output } from '@angular/core';

import { UserService } from '../../../../services/user.service';

import { SLIDING_MAPS_ANI } from '../sliding-maps.animation';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['../ort.component.css'],
  animations: SLIDING_MAPS_ANI
})
export class AutoComponent {

  @Output() state = 'closed';

  constructor(public user: UserService) { }

  toggle() {
    this.state = (this.state === 'closed') ? 'opened' : 'closed';
  }
}
