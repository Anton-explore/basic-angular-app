import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTopRated]',
})
export class TopRatedDirective implements OnInit {
  @Input('appTopRated') isTopRated?: boolean;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    if (this.isTopRated) {
      this.addStarIcon();
      this.setBackgroundColor();
    }
  }

  private addStarIcon(): void {
    const courseTitle = this.elementRef.nativeElement.querySelector(
      '.app-course-card__title'
    );
    courseTitle.classList.add('app-course-card__title__top-rated');
  }

  private setBackgroundColor(): void {
    this.elementRef.nativeElement.classList.add('app-course-card__top-rated');
  }
}
