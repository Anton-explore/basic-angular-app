import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { LogoComponent } from './logo/logo.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { HighlightBorderDirective } from './directives/highlight-border.directive';
import { DurationPipe } from './pipes/duration.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IfAuthenticatedDirective } from './directives/if-authenticated.directive';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';

@NgModule({
  declarations: [
    LogoComponent,
    CourseCardComponent,
    BreadcrumbsComponent,
    HighlightBorderDirective,
    DurationPipe,
    FilterPipe,
    OrderByPipe,
    IfAuthenticatedDirective,
    ConfirmationModalComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, MatDialogModule],
  exports: [
    LogoComponent,
    CourseCardComponent,
    BreadcrumbsComponent,
    HighlightBorderDirective,
    DurationPipe,
    FilterPipe,
    OrderByPipe,
    IfAuthenticatedDirective,
    ConfirmationModalComponent,
  ],
})
export class SharedModule {}
