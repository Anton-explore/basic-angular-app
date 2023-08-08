import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable, of, switchMap, tap } from 'rxjs';

import { Author, AuthorType, CourseType } from 'src/app/utils/datatypes';

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
        this.coursesSubject.next(data || []);
      });
  }

  getCourseById(id: number): void {
    this.http
      .get<CourseType>(`http://localhost:3004/courses/${id}`)
      .subscribe(data => {
        this.courseSubject.next(data);
      });
  }

  // createCourse(course: CourseType): void {
  //   this.http
  //     .post<CourseType>('http://localhost:3004/courses', course)
  //     .subscribe(() => {
  //       this.getList(this.pageNumber, 5, this.textFragment);
  //     });
  // }

  // updateCourse(course: CourseType): void {
  //   this.http
  //     .patch<CourseType>(`http://localhost:3004/courses/${course.id}`, course)
  //     .subscribe(() => {
  //       this.getList(this.pageNumber, 5, this.textFragment);
  //     });
  // }

  // removeCourse(id: number): void {
  //   this.http
  //     .delete<CourseType>(`http://localhost:3004/courses/${id}`)
  //     .subscribe(() => {
  //       this.getList(this.pageNumber, 5, this.textFragment);
  //     });
  // }

  createCourse(course: CourseType): void {
    this.http
      .post<CourseType>('http://localhost:3004/courses', course)
      .pipe(
        switchMap(() =>
          this.getListAndEmit(this.pageNumber, 5, this.textFragment)
        )
      )
      .subscribe();
  }

  updateCourse(course: CourseType): void {
    this.http
      .patch<CourseType>(`http://localhost:3004/courses/${course.id}`, course)
      .pipe(
        switchMap(() =>
          this.getListAndEmit(this.pageNumber, 5, this.textFragment)
        )
      )
      .subscribe();
  }

  removeCourse(id: number): void {
    this.http
      .delete<CourseType>(`http://localhost:3004/courses/${id}`)
      .pipe(
        switchMap(() =>
          this.getListAndEmit(this.pageNumber, 5, this.textFragment)
        )
      )
      .subscribe();
  }

  private getListAndEmit(
    pageNumber: number,
    pageSize: number,
    textFragment?: string
  ) {
    return this.http
      .get<CourseType[]>(
        `http://localhost:3004/courses?textFragment=${
          textFragment || ''
        }&sort=date&start=0&count=${pageNumber * pageSize}`
      )
      .pipe(
        tap(data => {
          this.coursesSubject.next(data || []);
        })
      );
  }

  getAuthors(): Observable<AuthorType[]> {
    return this.http.get<Author[]>('http://localhost:3004/authors').pipe(
      switchMap((authors: Author[]) => {
        const authorsWithType: AuthorType[] = authors.map(author => {
          const nameParts = author.name.split(' ');
          const lastName = nameParts.length > 1 ? nameParts[1] : '';
          const firstName = nameParts[0];
          return { ...author, name: firstName, lastName: lastName };
        });
        return of(authorsWithType);
      })
    );
  }
}
