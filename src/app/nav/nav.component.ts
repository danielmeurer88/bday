import { Component, OnInit } from '@angular/core';
import { LoginReporterService } from '../login-reporter.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private reporter : LoginReporterService) { }

  ngOnInit() {
  }

  logout() : void {
    this.reporter.loginSuccessful = false;
  }

}
