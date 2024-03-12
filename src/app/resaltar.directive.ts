
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appResaltar]',
})
export class ResaltarDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.resaltar('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.resaltar(null);
  }

  private resaltar(color: string | null) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
