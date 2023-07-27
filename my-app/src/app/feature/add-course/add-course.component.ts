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
  courseId: number | null = null;
  course?: CourseType;

  courseName!: string;
  courseDescription!: string;
  // releaseDate!: Date;
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
    this.route.paramMap.subscribe(params => {
      this.courseId = Number(params.get('id'));
      if (this.courseId) {
        this.coursesService.getCourseById(this.courseId);
        this.coursesService.course$.subscribe(
          (courseData: CourseType | null) => {
            if (courseData) {
              this.course = courseData;
              // this.courseAuthors = courseData.authors.map(author => author.name).join(', ');
              this.courseName = courseData.name;
              this.courseDescription = courseData.description;
              this.releaseDate = courseData.date;
              this.duration = courseData.length;
            }
          }
        );
      }
    });
  }

  setDuration(duration: number) {
    this.duration = duration;
  }
  setDate(date: string) {
    // this.releaseDate = new Date(date);
    this.releaseDate = date;
    console.log(this.releaseDate);
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
    if (this.course) {
      const updatedCourse: CourseType = {
        ...this.course,
        id: this.course.id,
        name: this.courseName,
        description: this.courseDescription,
        length: this.duration,
        // date: this.releaseDate.toLocaleDateString(),
        date: this.releaseDate,
      };
      this.coursesService.updateCourse(updatedCourse);
    } else {
      this.coursesService.createCourse({
        id: Math.floor(Math.random() * 100000000),
        name: this.courseName,
        description: this.courseDescription,
        length: this.duration,
        // date: this.releaseDate.toLocaleDateString(),
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
