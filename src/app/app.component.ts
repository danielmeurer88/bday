import { Component, OnInit } from '@angular/core';

import { LoginReporterService } from './login-reporter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  loginOK : boolean = false;

  constructor(private reporter : LoginReporterService) {
    
  }

  ngOnInit() {
    this.reporter.subscribe((state)=>this.loginOK = state);
  }

}
