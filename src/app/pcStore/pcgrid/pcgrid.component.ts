import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, OnDestroy, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-pcgrid',
  templateUrl: './pcgrid.component.html',
  styleUrls: ['./pcgrid.component.css'],
  encapsulation : ViewEncapsulation.Emulated,
})
export class PcgridComponent implements OnInit {

  @Input('inputFromParent') computers:Array<string> = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('called from grid'+ changes);
  }

  ngDoCheck(){
    console.log('ngDoCheck called')
  }
  ngOnDestroy(){
    console.log('ngDestroy called')
  }
  
  

}
