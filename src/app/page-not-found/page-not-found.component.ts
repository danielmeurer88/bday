import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <p>
      <i class="fa fa-exclamation-triangle" aria-hidden="true"></i> 404 - page not found
    </p>
    <p>
      <a routerLink="/bday">Wechsel zu bday</a>
    </p>`,
  styles: ['p {font-size:46px;}']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
