import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pc-creator',
  templateUrl: './pc-creator.component.html',
  styleUrls: ['./pc-creator.component.css']
})
export class PcCreatorComponent implements OnInit {

  servers: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit called');
  }

  onComputerAdded(event: any) {
    console.log("I'm emitted")
    console.log(event);
  }

}
