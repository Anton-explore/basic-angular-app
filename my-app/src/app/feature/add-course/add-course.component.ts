import { Component, EventEmitter, Output } from '@angular/core';
import { MOCKED_AUTHORS } from 'src/app/utils/mock-items';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent {
  courseName!: string;
  courseDescription!: string;
  releaseDate!: string;
  duration!: number;
  authors = MOCKED_AUTHORS.slice();
  courseAuthors: string[] = [];
  @Output() cancelAddition: EventEmitter<void> = new EventEmitter<void>();

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
    console.log('Saving course...');
  }
  onCanceling() {
    this.cancelAddition.emit();
    console.log('Canceling...');
  }
}
