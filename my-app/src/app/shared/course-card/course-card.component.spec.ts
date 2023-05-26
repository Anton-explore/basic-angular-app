import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCardComponent } from './course-card.component';
import { CourseType } from 'src/app/utils/datatypes';

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;
  const mockedCourse: CourseType = {
    id: 1,
    length: 120,
    date: '8/9/2020',
    name: 'Test course',
    description: 'Some simple description',
  };
  const mockedCourse1: CourseType = {
    id: 2,
    length: 40,
    date: '8/9/2020',
    name: 'Test course',
    description: 'Some simple description',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
    component.course = mockedCourse;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit course id when edit button is clicked', () => {
    spyOn(component.courseEdited, 'emit');
    component.onEditCourse();
    expect(component.courseEdited.emit).toHaveBeenCalledWith(mockedCourse.id);
  });

  it('should emit course id when delete button is clicked', () => {
    spyOn(component.courseDeleted, 'emit');
    component.onDeleteCourse();
    expect(component.courseDeleted.emit).toHaveBeenCalledWith(mockedCourse.id);
  });

  it('should have correct buttons text', () => {
    expect(component.editText).toBe('Edit');
    expect(component.deleteText).toBe('Delete');
  });

  it('should format the duration more than hour correctly', () => {
    expect(component.formattedDuration).toBe('2h 00 min');
  });

  it('should format the duration less than hour correctly', () => {
    component.course = mockedCourse1;
    component.ngOnInit();
    expect(component.formattedDuration).toBe('40 min');
  });
});
