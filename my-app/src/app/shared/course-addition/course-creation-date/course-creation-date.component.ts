import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-course-creation-date',
  templateUrl: './course-creation-date.component.html',
  styleUrls: ['./course-creation-date.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCreationDateComponent {
  @Input() releaseDate?: string;
  @Output() releaseDateChange: EventEmitter<string> =
    new EventEmitter<string>();

  // onChange() {
  //   this.inputChange.emit(this.releaseDate);
  // }
}
