import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './courses-list/search-bar/search-bar.component';
import { CoursesListComponent } from './courses-list/courses-list.component';

@NgModule({
  declarations: [CoursesListComponent, SearchBarComponent],
  imports: [CommonModule],
  exports: [CoursesListComponent, SearchBarComponent],
})
export class FeatureModule {}
