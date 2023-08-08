import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

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
import { CourseTitleComponent } from './course-addition/course-title/course-title.component';
import { CourseDescriptionComponent } from './course-addition/course-description/course-description.component';
import { CourseCreationDateComponent } from './course-addition/course-creation-date/course-creation-date.component';
import { CourseDurationComponent } from './course-addition/course-duration/course-duration.component';
import { CourseAuthorsComponent } from './course-addition/course-authors/course-authors.component';
import { AddCourseButtonsComponent } from './course-addition/add-course-buttons/add-course-buttons.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CustomRouteReuseStrategy } from './custom-route-reuse-strategy/custom-route-reuse-strategy';
import { LoaderComponent } from './loader/loader.component';

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
    CourseTitleComponent,
    CourseDescriptionComponent,
    CourseCreationDateComponent,
    CourseDurationComponent,
    CourseAuthorsComponent,
    AddCourseButtonsComponent,
    NotFoundComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
  ],
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
    CourseTitleComponent,
    CourseDescriptionComponent,
    CourseCreationDateComponent,
    CourseDurationComponent,
    CourseAuthorsComponent,
    AddCourseButtonsComponent,
    NotFoundComponent,
    LoaderComponent,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy },
  ],
})
export class SharedModule {}
