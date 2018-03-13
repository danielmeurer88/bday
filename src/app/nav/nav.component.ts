import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  localStorageKey : string = "allowAccess";

  @Input() loginOK_Child : boolean;
  @Output() emitter : EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  logout() : void {
    this.loginOK_Child = false;
    this.emitter.emit(this.loginOK_Child);

    localStorage.setItem(this.localStorageKey, "false" );
  }

}
