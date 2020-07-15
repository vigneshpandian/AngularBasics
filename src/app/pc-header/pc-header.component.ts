import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-pc-header',
  templateUrl: './pc-header.component.html',
  styleUrls: ['./pc-header.component.css']
})
export class PcHeaderComponent implements OnInit {

  @Output() onSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(navigateTo:string){
    this.onSelected.emit(navigateTo);
  }
}
