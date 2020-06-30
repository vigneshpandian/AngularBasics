import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pc-grid',
  templateUrl: './pc-grid.component.html',
  styleUrls: ['./pc-grid.component.css']
})
export class PcConfigurationGridComponent implements OnInit {

  @Input() item:Array<string>;

  constructor() { }

  ngOnInit(): void {
  }

}
