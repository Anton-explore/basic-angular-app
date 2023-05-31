import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  faCalendar,
  faClock,
  faPen,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { CourseType } from 'src/app/utils/datatypes';
import { BUTTONS_TEXT } from 'src/app/utils/mock-items';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent implements OnInit {
  @Input() course!: CourseType;
  @Output() courseEdited: EventEmitter<number> = new EventEmitter<number>();
  @Output() courseDeleted: EventEmitter<number> = new EventEmitter<number>();

  formattedDuration!: string;
  convertedDate!: string;
  editText = BUTTONS_TEXT.EDIT;
  deleteText = BUTTONS_TEXT.DEL;
  clockIcon = faClock;
  calendarIcon = faCalendar;
  penIcon = faPen;
  trashIcon = faTrash;

  constructor() {
    console.log('Constructor was called!');
  }

  ngOnInit() {
    console.log('ngOnInit was called!');
  }

  onEditCourse(): void {
    this.courseEdited.emit(this.course.id);
  }

  onDeleteCourse(): void {
    this.courseDeleted.emit(this.course.id);
  }
}
