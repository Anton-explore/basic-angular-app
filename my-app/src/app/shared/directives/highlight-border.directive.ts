import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighlightBorder]',
})
export class HighlightBorderDirective implements OnInit {
  @Input('appHighlightBorder') date!: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  private setBorderColor(): void {
    const currentDate = new Date();
    const past14Date = new Date();
    const creationDate = new Date(this.date);
    past14Date.setDate(currentDate.getDate() - 14);

    if (creationDate < currentDate && creationDate >= past14Date) {
      this.renderer.setStyle(
        this.elRef.nativeElement,
        'border',
        'solid 2px green'
      );
      this.renderer.setStyle(
        this.elRef.nativeElement,
        'box-shadow',
        `0 1px 2px 0 #27a127,
        0 2px 10px 0 #6ed86e`
      );
    } else if (creationDate > currentDate) {
      this.renderer.setStyle(
        this.elRef.nativeElement,
        'border',
        'solid 2px blue'
      );
      this.renderer.setStyle(
        this.elRef.nativeElement,
        'box-shadow',
        `0 1px 2px 0 #598deb,
        0 2px 10px 0 #73cdea`
      );
    }
  }

  ngOnInit(): void {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'transition',
      'all 300ms ease-in-out'
    );
    this.setBorderColor();
  }
  @HostListener('mouseenter') onMouseOver() {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'transform',
      'scale(1.02)'
    );
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.elRef.nativeElement, 'transform', 'scale(1)');
  }
}
