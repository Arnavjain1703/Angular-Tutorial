import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-serves',
  template: `<app-server></app-server>
  <app-server></app-server> `,
  styles: []
})
export class ServesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
