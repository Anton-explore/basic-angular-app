import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';
import { INPUTS_TEXT } from 'src/app/utils/mock-items';

@Component({
  selector: 'app-course-title',
  templateUrl: './course-title.component.html',
  styleUrls: ['./course-title.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseTitleComponent {
  @Input() courseName?: string;
  @Output() courseNameChange: EventEmitter<string> = new EventEmitter<string>();
  label = INPUTS_TEXT.TITLE;
  placeholder = INPUTS_TEXT.TITLE_PLH;

  // onChange() {
  //   this.inputChange.emit(this.courseName);
  // }
}
