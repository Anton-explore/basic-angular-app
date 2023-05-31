import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appHighlightBorder]',
})
export class HighlightBorderDirective implements OnInit {
  @Input('appHighlightBorder') date!: string;
  @HostBinding('style.border') borderStyle!: string;
  @HostBinding('style.boxShadow') shadowStyle!: string;
  @HostBinding('style.transition') transition!: string;
  @HostBinding('style.transform') transform!: string;

  constructor(private elRef: ElementRef) {}

  private setBorderColor(): void {
    const currentDate = new Date();
    const past14Date = new Date();
    const creationDate = new Date(this.date);
    past14Date.setDate(currentDate.getDate() - 14);

    if (creationDate < currentDate && creationDate >= past14Date) {
      this.borderStyle = 'solid 2px green';
      this.shadowStyle = '0 1px 2px 0 #27a127, 0 2px 10px 0 #6ed86e';
    } else if (creationDate > currentDate) {
      this.borderStyle = 'solid 2px blue';
      this.shadowStyle = '0 1px 2px 0 #598deb, 0 2px 10px 0 #73cdea';
    }
  }

  ngOnInit(): void {
    this.transition = 'all 300ms ease-in-out';
    this.setBorderColor();
  }
  @HostListener('mouseenter') onMouseOver() {
    this.transform = 'scale(1.02)';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.transform = 'scale(1)';
  }
}
