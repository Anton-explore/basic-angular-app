import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationModalComponent } from 'src/app/shared/confirmation-modal/confirmation-modal.component';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';
import { CoursesService } from 'src/app/shared/services/courses.service';
import { CourseType } from 'src/app/utils/datatypes';
import { BUTTONS_TEXT } from 'src/app/utils/mock-items';

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

  constructor(
    private coursesService: CoursesService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getCourses();
    this.filteredCourses = this.courses;
  }

  getCourses(): void {
    this.courses = this.coursesService.getCourses();
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
        console.log(`You delete ${courseName} course with ID: ${courseId}`);
      }
    });
  }
}
