import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p4',
  templateUrl: './p4.component.html',
  styleUrls: ['./p4.component.css']
})
export class P4Component implements OnInit {

  inputData1:number;
  inputData2:number;
  add:number;
  sum()
  {
    this.add=this.inputData1*1+this.inputData2*1;
  }

  constructor() { }

  ngOnInit() {
  }

}
