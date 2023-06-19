import { Injectable, EventEmitter } from '@angular/core';

import { CourseType } from 'src/app/utils/datatypes';
import { COURSES } from 'src/app/utils/mock-items';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  coursesListChange: EventEmitter<CourseType[]> = new EventEmitter<
    CourseType[]
  >();
  private courses: CourseType[] = COURSES.slice();

  getCourses(): CourseType[] {
    return this.courses.slice() || [];
  }

  getCourseById(id: number): CourseType | undefined {
    return this.courses.find(course => course.id === id);
  }

  createCourse(course: CourseType): void {
    this.courses.push(course);
    this.coursesListChange.emit(this.courses.slice());
  }

  updateCourse(course: CourseType): void {
    const index = this.courses.findIndex(c => c.id === course.id);
    if (index !== -1) {
      this.courses[index] = course;
      this.coursesListChange.emit(this.courses.slice());
    }
  }

  removeCourse(id: number): void {
    const index = this.courses.findIndex(course => course.id === id);
    if (index !== -1) {
      this.courses.splice(index, 1);
      this.coursesListChange.emit(this.courses.slice());
    }
  }
}
