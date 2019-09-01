import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-serves',
  templateUrl:'./serves.component.html',
  styles: []
})
export class ServesComponent implements OnInit{
  hellow=false;
  servesstatus='no server';
  servesName='';
  servesP=false;
  constructor() { 
   setTimeout (()=> {
     this.hellow = true;
   },2000);
  }

  ngOnInit() {
  }
  servesCreated()
  {
    this.servesP=true;
    this.servesstatus='servescreated';

  }
  onserverupdate(event:Event){

   this.servesName=(<HTMLInputElement>event.target).value;

  }

}
