import {
  Component,
  EventEmitter,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-add-course-buttons',
  templateUrl: './add-course-buttons.component.html',
  styleUrls: ['./add-course-buttons.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCourseButtonsComponent {
  @Output() saveClick: EventEmitter<void> = new EventEmitter<void>();
  @Output() cancelClick: EventEmitter<void> = new EventEmitter<void>();

  onSave() {
    this.saveClick.emit();
  }

  onCancel() {
    this.cancelClick.emit();
  }
}
