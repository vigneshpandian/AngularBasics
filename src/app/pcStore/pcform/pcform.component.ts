import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, SimpleChanges, 
  OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ContentChild } from '@angular/core';
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

  @ViewChild('pcName') pcName: ElementRef;

  @ContentChild('content') content : ElementRef;

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

  clear(event: any) {
    event.value = "";
    this.pcName.nativeElement.setAttribute("placeholder", "enter value"); //view child
    console.log(event);
  }
  onComputerAdded(event: any) {
    console.log("I'm emitted")
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges' + changes)
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit called');

   
  }
  

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked checked')

    console.log("content child" + this.content);
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit() called');
    
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called');
  }
  
  destroyGrid(){
   
    this.computers.pop();
  }
}
