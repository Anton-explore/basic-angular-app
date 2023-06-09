import { Injectable } from '@angular/core';

import { CourseType } from 'src/app/utils/datatypes';
import { COURSES } from 'src/app/utils/mock-items';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private courses: CourseType[] = Object.assign(COURSES);

  getCourses(): CourseType[] {
    return this.courses;
  }

  getCourseById(id: number): CourseType | undefined {
    return this.courses.find(course => course.id === id);
  }

  createCourse(course: CourseType): void {
    this.courses.push(course);
  }

  updateCourse(course: CourseType): void {
    const index = this.courses.findIndex(c => c.id === course.id);
    if (index !== -1) {
      this.courses[index] = course;
    }
  }

  removeCourse(id: number): void {
    const index = this.courses.findIndex(course => course.id === id);
    if (index !== -1) {
      this.courses.splice(index, 1);
    }
  }
}
