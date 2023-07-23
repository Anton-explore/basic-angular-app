import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { ConfirmationModalComponent } from 'src/app/shared/confirmation-modal/confirmation-modal.component';
import { CoursesService } from 'src/app/shared/services/courses.service';
import { CourseType } from 'src/app/utils/datatypes';
import { BUTTONS_TEXT } from 'src/app/utils/mock-items';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
})
export class CoursesListComponent implements OnInit {
  searchText!: string;
  courses: CourseType[] = [];
  private currentPage = 1;
  loadMoreText = BUTTONS_TEXT.MORE;

  // filteredCourses: CourseType[] = [];
  orderedBy: 'asc' | 'desc' = 'asc';
  @Output() courseAddition: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private coursesService: CoursesService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit() {
    this.getCourses();
    // this.filteredCourses = this.courses;
  }

  getCourses(): void {
    this.coursesService.getList(1, 5);
    this.coursesService.courses$.subscribe(courses => {
      this.courses = courses;
    });
  }

  applyFilter(searchText: string) {
    this.searchText = searchText;
    this.coursesService.getList(this.currentPage, 5, this.searchText);
  }

  onLoadingMore() {
    this.currentPage = this.currentPage + 1;
    this.coursesService.getList(this.currentPage, 5, this.searchText);
    console.log('Loading moore..');
  }

  trackCourseById(index: number, course: CourseType): number {
    return course.id;
  }

  onCourseEdited(courseId: number): void {
    this.router.navigate(['/courses', courseId]);
  }

  onCourseDeleted(courseId: number): void {
    const deletedCourse = this.courses.find(course => course.id === courseId);
    const courseName = deletedCourse?.name;

    const dialogRef = this.dialog.open(ConfirmationModalComponent);
    dialogRef.componentInstance.content = {
      title: 'Delete course?',
      text: `Are you sure you want to delete ${courseName} course?`,
    };

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.coursesService.removeCourse(courseId);
        this.getCourses();
        // this.filteredCourses = this.courses;
      }
    });
  }
}
