import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective {
  constructor(private el: ElementRef) {}

  @Input() appHover: any = 'test';

  @Input() defaultText: any = 'test';

  @HostListener('mouseenter') onMouseEnter() {
    this.hover(this.appHover || this.defaultText);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hover(this.defaultText);
  }

  private hover(innerHTML: any) {
    this.el.nativeElement.innerHTML = innerHTML;
  }
}
