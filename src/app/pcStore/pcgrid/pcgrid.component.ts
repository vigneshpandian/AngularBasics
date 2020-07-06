import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

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

 

  

}
