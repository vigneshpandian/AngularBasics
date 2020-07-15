import { Component, OnInit } from '@angular/core';

import { PcParts } from '../models/pcParts.model';

@Component({
  selector: 'app-pc-inventory',
  templateUrl: './pc-inventory.component.html',
  styleUrls: ['./pc-inventory.component.css']
})
export class PcInventoryComponent implements OnInit {

  pcComponents: Array<PcParts> = [
    new PcParts("Ram",2,"Voltaile memory","https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8YOV7m3X-ZjeEzX6qd5ZJytYuS38jaoVCZuLWT3EGR353T_VU7rLVBLCBp7Rfvh_HVUwfd8k&usqp=CAc"), 
                                  
    new PcParts("Processor",2,"Computes everything","https://media.gettyimages.com/photos/an-intel-core-i7-4770k-central-processing-unit-taken-on-february-11-picture-id455920046?s=2048x2048") ];

  constructor() { }

  ngOnInit(): void {
  }

}
