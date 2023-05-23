import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './courses-list/search-bar/search-bar.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CoursesListComponent, SearchBarComponent],
  imports: [CommonModule, FormsModule, SharedModule],
  exports: [CoursesListComponent, SearchBarComponent],
})
export class FeatureModule {}
