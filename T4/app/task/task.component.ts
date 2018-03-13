import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  name="avadhut";
  inputdata=" ";
  
  displaystatus:boolean=false;
  toggle()
  {
    if(this.displaystatus==false)
    {
      this.displaystatus=true;
    }
    else
    {
      this.displaystatus=false;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
