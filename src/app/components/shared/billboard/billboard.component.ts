import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.component.html',
  styles: []
})
export class BillboardComponent implements OnInit {

  @Input('movies') movies;
  @Input('billboardTitle') title;

  constructor() {
   }

  

  ngOnInit() {
  }

}
