import { Directive, ElementRef, Renderer2, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';

@Directive({
  selector: '[appAppHighlight]'
})
export class AppHighlightDirective implements OnInit, AfterViewChecked, AfterViewInit {

  constructor(private element : ElementRef,  private renderer: Renderer2) { }

  ngOnInit(){
    this.renderer.setStyle(this.element.nativeElement, 'color','red');
    
    // this.renderer.addClass(this.element.nativeElement, "highlighter");
  }

  ngAfterViewInit(){
  
  }

  ngAfterViewChecked(){
    
  }
}
