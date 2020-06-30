import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-pc-form',
  templateUrl: './pc-form.component.html',
  styleUrls: ['./pc-form.component.css']
})
export class PcConfigurationFormComponent implements OnInit {

  lblText = "Gaming PC Name";
  computerName = "";

   computers: Array<string> = [];
  constructor() { }

  ngOnInit(): void {
  }

  
  
  enableComputerButton(){
    
    return this.computerName == "";
  }

  captureTypedText(event:any){
    
  }

  onButtonClicked(event:any){
    this.computers.push(this.computerName);
    this.computerName = "";
  }

}
