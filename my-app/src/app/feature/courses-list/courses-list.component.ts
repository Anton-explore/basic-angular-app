import { Component, OnInit } from '@angular/core';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import { CourseType } from 'src/app/utils/datatypes';
import { BUTTONS_TEXT, COURSES } from 'src/app/utils/mock-items';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
})
export class CoursesListComponent implements OnInit {
  searchText?: string;
  courses: CourseType[] = [];
  loadMoreText = BUTTONS_TEXT.MORE;

  filteredCourses: CourseType[] = [];
  orderedBy: 'asc' | 'desc' = 'asc';

  ngOnInit() {
    this.courses = COURSES;
    this.filteredCourses = this.courses;
  }

  applyFilter(searchText: string) {
    this.searchText = searchText;
    this.filteredCourses = this.filterCoursesByName(searchText);
  }

  private filterCoursesByName(searchText: string): CourseType[] {
    const filterPipe = new FilterPipe();
    return filterPipe.transform(this.courses, searchText);
  }

  onLoadingMore() {
    console.log('Loading moore..');
  }

  trackCourseById(index: number, course: CourseType): number {
    return course.id;
  }

  onCourseEdited(courseId: number): void {
    console.log('You want edit course with ID: ' + courseId);
  }

  onCourseDeleted(courseId: number): void {
    console.log('You delete course with ID: ' + courseId);
  }
}
