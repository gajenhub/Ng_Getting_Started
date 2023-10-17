import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  //templateUrl: './app.component.html',
  template: `
  <div>
    <h1>{{pageTitle}}</h1>
    <pm-product></pm-product>
  </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  pageTitle: string = 'Self-care Management';
  constructor() {}

  ngOnInit() {}
}
