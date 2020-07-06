import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InvokeFunctionExpr } from '@angular/compiler';

@Component({
  selector: 'app-pcform',
  templateUrl: './pcform.component.html',
  styleUrls: ['./pcform.component.css']
})
export class PcformComponent implements OnInit {

  lblText = "Gaming PC Name";
  computerName = "";

  @Input('inputFromParent') computers: Array<string>;
  
  @Output() computerCreated = new EventEmitter<Array<string>>();
  
  constructor() { }

  ngOnInit(): void {
  }



  enableComputerButton() {

    return this.computerName == "";
  }

  captureTypedText(event: any) {

  }

  onButtonClicked(event: any) {
    this.computers.push(this.computerName);
    this.computerName = "";

    this.computerCreated.emit(this.computers);

  }
  onComputerAdded(event:any){
    console.log("I'm emitted")
  }

}
