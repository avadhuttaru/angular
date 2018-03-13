import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textdata;
  name="avadhut";
  path="./assets/off.png";
  value="on";
  onoff()
  {

    
    if(this.value=="on")
    {
      this.path="./assets/on.png";
      this.value="off";
    }
    else
    {
      this.path="./assets/off.png";
      this.value="on";
    }
  }
}
