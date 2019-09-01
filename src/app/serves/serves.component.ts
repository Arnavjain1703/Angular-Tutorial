import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-serves',
  templateUrl:'./serves.component.html',
  styles: []
})
export class ServesComponent implements OnInit{
  hellow=false;
  constructor() { 
   setTimeout (()=> {
     this.hellow = true;
   },2000);
  }

  ngOnInit() {
  }

}
