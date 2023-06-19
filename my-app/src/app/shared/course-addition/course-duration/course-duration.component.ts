import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';
import { INPUTS_TEXT } from 'src/app/utils/mock-items';

@Component({
  selector: 'app-course-duration',
  templateUrl: './course-duration.component.html',
  styleUrls: ['./course-duration.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseDurationComponent {
  @Input() duration!: number;
  @Output() durationChange: EventEmitter<number> = new EventEmitter<number>();
  label = INPUTS_TEXT.DURATION;
  placeholder = INPUTS_TEXT.DURATION_PLH;

  // onChange(e: Event) {
  //   const element = e.target as HTMLInputElement;
  //   const parsedValue = parseInt(element.value, 10);
  //   if (!isNaN(parsedValue)) {
  //     this.inputChange.emit(this.duration);
  //   }
  // }
}
