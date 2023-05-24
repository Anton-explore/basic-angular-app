import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CourseType } from 'src/app/utils/datatypes';
import {
  convertToLocalDate,
  formatDuration,
} from 'src/app/utils/formatHelpers';
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

  constructor() {
    console.log('Constructor was called!');
  }

  ngOnInit() {
    this.formattedDuration = formatDuration(this.course.length);
    this.convertedDate = convertToLocalDate(this.course.date);
    console.log('ngOnInit was called!');
  }

  onEditCourse(): void {
    this.courseEdited.emit(this.course.id);
  }

  onDeleteCourse(): void {
    this.courseDeleted.emit(this.course.id);
  }
}
