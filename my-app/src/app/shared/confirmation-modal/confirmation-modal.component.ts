import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ModalContentType } from 'src/app/utils/datatypes';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css'],
})
export class ConfirmationModalComponent {
  @Input() content!: ModalContentType;
  constructor(public dialogRef: MatDialogRef<ConfirmationModalComponent>) {}
}
