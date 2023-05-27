import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { HighlightBorderDirective } from './directives/highlight-border.directive';

@NgModule({
  declarations: [LogoComponent, CourseCardComponent, BreadcrumbsComponent, HighlightBorderDirective],
  imports: [CommonModule],
  exports: [LogoComponent, CourseCardComponent, BreadcrumbsComponent],
})
export class SharedModule {}
