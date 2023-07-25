import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { AuthorType, CourseType } from 'src/app/utils/datatypes';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  coursesListChange: EventEmitter<CourseType[]> = new EventEmitter<
    CourseType[]
  >();

  static coursesList: CourseType[] = [];
  static authors: AuthorType[] = [];

  coursesSubject = new BehaviorSubject<CourseType[] | []>([]);
  courses$ = this.coursesSubject.asObservable();

  courseSubject = new BehaviorSubject<CourseType | null>(null);
  course$ = this.courseSubject.asObservable();

  private pageNumber!: number;
  private textFragment!: string | undefined;

  constructor(private http: HttpClient) {}

  getList(pageNumber: number, pageSize: number, textFragment?: string): void {
    this.pageNumber = pageNumber;
    this.textFragment = textFragment;

    const amount = pageNumber * pageSize;

    this.http
      .get<CourseType[]>(
        `http://localhost:3004/courses?textFragment=${
          textFragment || ''
        }&sort=date&start=0&count=${amount}`
      )
      .subscribe(data => {
        this.coursesSubject.next(data);
      });
  }

  getCourseById(id: number): void {
    this.http
      .get<CourseType>(`http://localhost:3004/courses/${id}`)
      .subscribe(data => {
        this.courseSubject.next(data);
      });
  }

  createCourse(course: CourseType): CourseType {
    this.http
      .post<CourseType>('http://localhost:3004/courses', course)
      .subscribe(() => {
        this.getList(this.pageNumber, 5, this.textFragment);
      });

    return course;
  }

  updateCourse(course: CourseType): CourseType {
    this.http
      .patch<CourseType>(`http://localhost:3004/courses/${course.id}`, course)
      .subscribe(() => {
        this.getList(this.pageNumber, 5, this.textFragment);
      });

    return course;
  }

  removeCourse(id: number): void {
    this.http
      .delete<CourseType>(`http://localhost:3004/courses/${id}`)
      .subscribe(() => {
        this.getList(this.pageNumber, 5, this.textFragment);
      });
  }
}
