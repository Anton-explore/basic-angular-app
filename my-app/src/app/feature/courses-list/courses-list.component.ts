import { Component } from '@angular/core';
import { BUTTONS_TEXT, COURSES } from 'src/app/utils/mock-items';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
})
export class CoursesListComponent {
  courses = COURSES;
  editText = BUTTONS_TEXT.EDIT;
  deleteText = BUTTONS_TEXT.DEL;
}
