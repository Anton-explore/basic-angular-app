import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseButtonsComponent } from './add-course-buttons.component';

describe('AddCourseButtonsComponent', () => {
  let component: AddCourseButtonsComponent;
  let fixture: ComponentFixture<AddCourseButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCourseButtonsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddCourseButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
