import { Directive, ElementRef, Renderer2, Attribute, OnInit } from '@angular/core';

@Directive({
  selector: '[appSetAltTextForImage]'
})
export class SetAltTextForImageDirective implements OnInit{

  imageSrc:string;

  srcAttributes: Array<string>;

  constructor(private element: ElementRef, private renderer: Renderer2) { 
  
  }

  ngOnInit(){
    this.imageSrc = this.element.nativeElement.getAttribute('src'); 

    this.srcAttributes = this.imageSrc.split("/");

    this.renderer.setAttribute(this.element.nativeElement, 'alt', this.srcAttributes[this.srcAttributes.length-1]);
  }

}
