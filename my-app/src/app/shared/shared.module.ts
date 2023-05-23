import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CourseCardComponent } from './course-card/course-card.component';

@NgModule({
  declarations: [LogoComponent, CourseCardComponent, BreadcrumbsComponent],
  imports: [CommonModule],
  exports: [LogoComponent, CourseCardComponent, BreadcrumbsComponent],
})
export class SharedModule {}
