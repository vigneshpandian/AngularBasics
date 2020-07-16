import { Directive, ElementRef, Renderer2, OnInit, HostBinding, HostListener } from '@angular/core';
import { title } from 'process';


@Directive({
  selector: '[appSetTitleForImage]'
})
export class SetTitleForImageDirective implements OnInit {

  @HostBinding('title') title = ''

  alt: string;

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    
    this.alt = this.element.nativeElement.getAttribute('alt');
  }

  @HostListener('mouseenter') onMouseMove(eventData: Event) {
    this.title = this.alt;
    console.log('alt text'+ this.alt);
    console.log(Event)
  }
}
