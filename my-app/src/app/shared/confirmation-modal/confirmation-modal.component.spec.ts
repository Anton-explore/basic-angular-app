import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';

import { ConfirmationModalComponent } from './confirmation-modal.component';
import { ModalContentType } from 'src/app/utils/datatypes';

describe('ConfirmationModalComponent', () => {
  let component: ConfirmationModalComponent;
  let fixture: ComponentFixture<ConfirmationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmationModalComponent],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {},
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an input property for content', () => {
    expect(component.content).toBeUndefined();

    const mockContent: ModalContentType = {
      title: 'Test title',
      text: 'test text',
    };

    component.content = mockContent;
    expect(component.content).toEqual(mockContent);
  });

  it('should close the dialog when closed', () => {
    const dialogRef = TestBed.inject(MatDialogRef);
    const spy = spyOn(dialogRef, 'close');

    component.dialogRef.close();
    expect(spy).toHaveBeenCalled();
  });
});
