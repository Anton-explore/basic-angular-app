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
  // @Input() releaseDate?: Date;
  // @Output() releaseDateChange: EventEmitter<Date> = new EventEmitter<Date>();
  @Input() releaseDate?: string;
  @Output() releaseDateChange: EventEmitter<string> =
    new EventEmitter<string>();

  // onChange() {
  //   this.inputChange.emit(this.releaseDate);
  // }
  getDateValue(): string {
    if (this.releaseDate) {
      console.log(this.releaseDate);
      // return this.releaseDate.toISOString().split('T')[0];
      // return this.releaseDate;
      return new Date(this.releaseDate).toISOString().split('T')[0];
    }
    return '';
  }

  onDateChange(event: Event) {
    const element = event.target as HTMLInputElement;
    // const selectedDate = new Date(element.value);
    const selectedDate = element.value;
    this.releaseDate = selectedDate;
    this.releaseDateChange.emit(selectedDate);
  }
}
