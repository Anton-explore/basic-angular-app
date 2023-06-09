import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './courses-list/search-bar/search-bar.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddCourseComponent } from './add-course/add-course.component';

@NgModule({
  declarations: [
    CoursesListComponent,
    SearchBarComponent,
    LoginComponent,
    AddCourseComponent,
  ],
  imports: [CommonModule, FormsModule, FontAwesomeModule, SharedModule],
  exports: [
    CoursesListComponent,
    SearchBarComponent,
    LoginComponent,
    AddCourseComponent,
  ],
})
export class FeatureModule {}
