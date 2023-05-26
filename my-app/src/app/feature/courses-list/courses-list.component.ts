import { Component, OnInit } from '@angular/core';
import { CourseType } from 'src/app/utils/datatypes';
import { BUTTONS_TEXT, COURSES } from 'src/app/utils/mock-items';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
})
export class CoursesListComponent implements OnInit {
  courses: CourseType[] = [];
  loadMoreText = BUTTONS_TEXT.MORE;

  ngOnInit() {
    this.courses = COURSES;
  }

  onLoadingMore() {
    console.log('Loading moore..');
  }

  trackCourseById(course: CourseType) {
    return course.id;
  }

  onCourseEdited(courseId: number): void {
    console.log('You want edit course with ID: ' + courseId);
  }

  onCourseDeleted(courseId: number): void {
    console.log('You delete course with ID: ' + courseId);
  }
}
