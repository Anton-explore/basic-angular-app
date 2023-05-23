import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCardComponent } from './course-card.component';
import { CourseType } from 'src/app/utils/datatypes';

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;
  let mockedCourse: CourseType;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseCardComponent],
      errorOnUnknownProperties: true,
      errorOnUnknownElements: true,
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
    mockedCourse = {
      id: 1,
      length: 60,
      date: '8/9/2020',
      name: 'Test course',
      description: 'Some simple description',
    };
    component.course = mockedCourse;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should emit course id when edit button is clicked', () => {
    spyOn(component.courseEdited, 'emit');
    fixture.detectChanges();
    const editButton = fixture.nativeElement.querySelector('.app-edit-button');
    editButton.click();
    expect(component.courseEdited.emit).toHaveBeenCalledWith(mockedCourse.id);
  });

  it('should emit course id when delete button is clicked', () => {
    spyOn(component.courseDeleted, 'emit');
    const deleteButton =
      fixture.nativeElement.querySelector('.app-delete-button');
    deleteButton.click();
    expect(component.courseDeleted.emit).toHaveBeenCalledWith(mockedCourse.id);
  });

  it('should have correct buttons text', () => {
    expect(component.editText).toBe('Edit');
    expect(component.deleteText).toBe('Delete');
  });

  it('should format the duration less than hour correctly', () => {
    component.course = {
      id: 1,
      length: 120,
      date: '8/9/2020',
      name: 'Test course',
      description: 'Some simple description',
    };
    fixture.detectChanges();
    expect(component.formattedDuration).toBe('2h 00 min');
  });

  it('should format the duration less than hour correctly', () => {
    component.course = {
      id: 2,
      length: 40,
      date: '8/9/2020',
      name: 'Test course',
      description: 'Some simple description',
    };
    fixture.detectChanges();
    expect(component.formattedDuration).toBe('40 min');
  });
});
