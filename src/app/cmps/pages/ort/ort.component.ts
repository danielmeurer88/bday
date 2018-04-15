import { Component} from '@angular/core';

import { UserService } from '../../../services/user.service';
import { VipOrigin } from '../../../models/vip.model';

@Component({
  selector: 'app-ort',
  templateUrl: './ort.component.html',
  styleUrls: ['./ort.component.css']
})
export class OrtComponent {

  constructor(public user: UserService) {
    this.user.test();
  }

}
