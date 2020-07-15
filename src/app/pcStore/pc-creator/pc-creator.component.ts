import { Component, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-pc-creator',
  templateUrl: './pc-creator.component.html',
  styleUrls: ['./pc-creator.component.css']
})
export class PcCreatorComponent implements OnInit {

  servers: Array<string> = [];

  constructor() {

      console.log('constructor called');

   }

  ngOnInit(): void {
    console.log('ngOnInit called');
  }

  onComputerAdded(event: any) {
    console.log("I'm emitted")
    console.log(event);
  }

  ngOnDestroy(){
     console.log('ngOnDestroy() called')
  }

}
