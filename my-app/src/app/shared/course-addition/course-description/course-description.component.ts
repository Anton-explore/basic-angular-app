import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';
import { INPUTS_TEXT } from 'src/app/utils/mock-items';

@Component({
  selector: 'app-course-description',
  templateUrl: './course-description.component.html',
  styleUrls: ['./course-description.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseDescriptionComponent {
  @Input() courseDescription?: string;
  @Output() courseDescriptionChange: EventEmitter<string> =
    new EventEmitter<string>();
  placeholder = INPUTS_TEXT.DESCR_PLH;

  // onChange() {
  //   this.inputChange.emit(this.courseDescription);
  // }
}
