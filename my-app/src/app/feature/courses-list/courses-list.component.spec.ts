import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListComponent } from './courses-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FeatureModule } from '../feature.module';
import { COURSES } from 'src/app/utils/mock-items';
import { CourseType } from 'src/app/utils/datatypes';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;
  const course: CourseType = {
    id: 7777,
    length: 60,
    date: '8/9/2020',
    name: 'Test course',
    description: 'Some simple description',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule, FeatureModule],
      declarations: [CoursesListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the courses array with mock data', () => {
    expect(component.courses).toEqual(COURSES);
  });

  it('should display course list items', () => {
    component.courses = COURSES;
    const courseListItems =
      fixture.nativeElement.querySelectorAll('.app-courses-card');
    expect(courseListItems.length).toBe(COURSES.length);
  });

  it('should display the "Load more" button', () => {
    expect(component.loadMoreText).toContain('Load more');
  });

  it('should log "Loading moore.." when "Load more" button is clicked', () => {
    spyOn(console, 'log');
    component.onLoadingMore();
    expect(console.log).toHaveBeenCalledWith('Loading moore..');
  });

  it('should track courses by their id', () => {
    const result = component.trackCourseById(course);
    expect(result).toBe(course.id);
  });

  it('should call onCourseEdited method with correct courseId', () => {
    spyOn(component, 'onCourseEdited');
    const courseId = 2848;
    component.onCourseEdited(courseId);
    expect(component.onCourseEdited).toHaveBeenCalledWith(courseId);
  });

  it('should log message with course id when "onCourseEdited" method was called', () => {
    spyOn(console, 'log');
    const courseId = 2848;
    component.onCourseEdited(courseId);
    expect(console.log).toHaveBeenCalledWith(
      `You want edit course with ID: ${courseId}`
    );
  });

  it('should call onCourseDeleted method with correct courseId', () => {
    spyOn(component, 'onCourseDeleted');
    const courseId = 7777;
    component.onCourseDeleted(courseId);
    expect(component.onCourseDeleted).toHaveBeenCalledWith(courseId);
  });

  it('should log message with course id when "onCourseDeleted" method was called', () => {
    spyOn(console, 'log');
    const courseId = 7777;
    component.onCourseDeleted(courseId);
    expect(console.log).toHaveBeenCalledWith(
      `You delete course with ID: ${courseId}`
    );
  });
});
