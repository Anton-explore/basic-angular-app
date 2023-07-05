import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CoursesService } from 'src/app/shared/services/courses.service';
import { CourseType } from 'src/app/utils/datatypes';
import { MOCKED_AUTHORS } from 'src/app/utils/mock-items';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent implements OnInit {
  isEdit = false;
  courseId: string | null = null;
  course?: CourseType;

  courseName!: string;
  courseDescription!: string;
  releaseDate!: string;
  duration!: number;
  authors = MOCKED_AUTHORS.slice();
  courseAuthors: string[] = [];
  @Output() cancelAddition: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private coursesService: CoursesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.courseId = this.route.snapshot.params['id'];
    this.isEdit = !!this.courseId;
    if (this.courseId) {
      this.course = this.coursesService.getCourseById(+this.courseId);
    }
  }

  setDuration(duration: number) {
    this.duration = duration;
  }
  setDate(date: string) {
    this.releaseDate = date;
  }
  setDescr(descr: string) {
    this.courseDescription = descr;
  }
  setTitle(title: string) {
    this.courseName = title;
  }
  setAuthors(authors: string[]) {
    this.courseAuthors = authors;
  }

  onSaving() {
    if (this.isEdit && this.course) {
      const updatedCourse: CourseType = {
        ...this.course,
        id: this.course.id,
        name: this.courseName,
        description: this.courseDescription,
        length: this.duration,
        date: this.releaseDate,
      };
      this.coursesService.updateCourse(updatedCourse);
    } else {
      this.coursesService.createCourse({
        id: Math.floor(Math.random() * 100000000),
        name: this.courseName,
        description: this.courseDescription,
        length: this.duration,
        date: this.releaseDate,
        // authors: this.courseAuthors,
      });
    }
    console.log('Saving course...');
    this.router.navigate(['courses']);
  }
  onCanceling() {
    this.cancelAddition.emit();
    console.log('Canceling...');
    this.router.navigate(['courses']);
  }
}
