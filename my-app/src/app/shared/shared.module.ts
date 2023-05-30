import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { HighlightBorderDirective } from './directives/highlight-border.directive';
import { TopRatedDirective } from './directives/top-rated.directive';
import { DurationPipe } from './pipes/duration.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [
    LogoComponent,
    CourseCardComponent,
    BreadcrumbsComponent,
    HighlightBorderDirective,
    TopRatedDirective,
    DurationPipe,
    FilterPipe,
    OrderByPipe,
  ],
  imports: [CommonModule],
  exports: [
    LogoComponent,
    CourseCardComponent,
    BreadcrumbsComponent,
    HighlightBorderDirective,
    TopRatedDirective,
    DurationPipe,
    FilterPipe,
    OrderByPipe,
  ],
})
export class SharedModule {}
