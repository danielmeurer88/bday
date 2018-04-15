import { Component, Input, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.css']
})
export class QAComponent implements OnInit {

  @Input() question = '';
  @Input() answer = '';

  lines: string[] = [];

  show = true;

  constructor() { }

  ngOnInit() {
    const arrayRegex = /\[(['"`\w,\r\n\t\ ()\[\]\/*+-]*)]/;
    const arrayContent = /\[(['"`\w,\r\n\t\ ()\[\]\/*+-]*)]/;
    const stringCleaner = /['"`]/g;
    let content;

    if (arrayRegex.test(this.answer)) {
      const contentArr = this.answer.match(arrayContent);
      content = contentArr[1].split(',');
      for (let i = 0; i < content.length; i++) {
        content[i] = content[i].replace(stringCleaner, '');
        this.lines.push(content[i]);
      }
    } else {
      content = this.answer.toString();

      this.lines.push(content);
    }

  }

  matchesString (str: string): boolean {
    this.show = true;

    return this.show;
  }

}
