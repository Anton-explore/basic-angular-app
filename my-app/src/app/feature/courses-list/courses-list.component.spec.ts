import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatDialog,
  MatDialogModule,
  // MatDialogRef,
} from '@angular/material/dialog';

import { CoursesListComponent } from './courses-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FeatureModule } from '../feature.module';
import { COURSES, filteredCourses } from 'src/app/utils/mock-items';
import { CourseType } from 'src/app/utils/datatypes';
import { CoursesService } from 'src/app/shared/services/courses.service';
// import { of } from 'rxjs';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;
  let course: CourseType;
  let initialCourses: CourseType[];
  let testCourses: CourseType[];
  let coursesService: CoursesService;
  // let dialog: MatDialog;

  beforeEach(async () => {
    const dialogSpy = jasmine.createSpyObj('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      imports: [SharedModule, FeatureModule, MatDialogModule],
      declarations: [CoursesListComponent],
      providers: [CoursesService, { provide: MatDialog, useValue: dialogSpy }],
    }).compileComponents();

    course = {
      id: 7777,
      length: 60,
      date: '8/9/2020',
      name: 'Test course',
      description: 'Some simple description',
    };
    testCourses = filteredCourses.slice();
    initialCourses = COURSES.slice();
    coursesService = TestBed.inject(CoursesService);
    // dialog = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Basic function', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should initialize the courses array with mock data', () => {
      coursesService.getCourses();
      component.ngOnInit();
      expect(component.courses).toEqual(initialCourses);
    });

    it('should track courses by their id', () => {
      const result = component.trackCourseById(
        component.courses.indexOf(course),
        course
      );
      expect(result).toBe(course.id);
    });
  });

  describe('Loading moore data', () => {
    it('should display the "Load more" button', () => {
      expect(component.loadMoreText).toContain('Load more');
    });

    it('should log "Loading moore.." when "Load more" button is clicked', () => {
      spyOn(console, 'log');
      component.onLoadingMore();
      expect(console.log).toHaveBeenCalledWith('Loading moore..');
    });
  });

  describe('onCourseEdited method', () => {
    it('should log message with course id when "onCourseEdited" method was called', () => {
      spyOn(console, 'log');
      const courseId = 2848;
      component.onCourseEdited(courseId);
      expect(console.log).toHaveBeenCalledWith(
        `You want edit course with ID: ${courseId}`
      );
    });
  });

  describe('onCourseDeleted method', () => {
    const courseId = 455654757;
    // const courseName = 'Javascript';

    beforeEach(() => {
      initialCourses = COURSES;
    });

    it('should call onCourseDeleted method with correct courseId', () => {
      spyOn(component, 'onCourseDeleted');
      component.onCourseDeleted(courseId);
      expect(component.onCourseDeleted).toHaveBeenCalledWith(courseId);
    });

    // it('should remove the course and update the list of courses', () => {
    //   spyOn(coursesService, 'removeCourse').and.stub();
    //   spyOn(coursesService, 'getCourses').and.callThrough();
    //   spyOn(dialog, 'open').and.callThrough();

    //   const dialogRefSpy = jasmine.createSpyObj<MatDialogRef<any, any>>(
    //     'MatDialogRef',
    //     ['afterClosed']
    //   );
    //   dialogRefSpy.afterClosed.and.returnValue(of(true));
    //   const dialogRef = {
    //     componentInstance: {},
    //     afterClosed: () => dialogRefSpy.afterClosed(),
    //   } as MatDialogRef<any, any>;
    //   spyOn(dialogRef, 'afterClosed').and.returnValue(of(true));
    //   spyOn(dialog, 'open').and.returnValue(dialogRef);

    //   component.onCourseDeleted(courseId);

    //   expect(coursesService.removeCourse).toHaveBeenCalledWith(courseId);
    //   expect(coursesService.getCourses).toHaveBeenCalled();
    //   expect(component.courses.length).toEqual(initialCourses.length - 1);
    // });

    // it('should log message with course id when "onCourseDeleted" method was called', () => {
    //   const dialogRefSpy = jasmine.createSpyObj<MatDialogRef<any, any>>(
    //     'MatDialogRef',
    //     ['afterClosed']
    //   );
    //   dialogRefSpy.afterClosed.and.returnValue(of(true));
    //   const dialogRef = {
    //     componentInstance: {},
    //     afterClosed: () => dialogRefSpy.afterClosed(),
    //   } as MatDialogRef<any, any>;
    //   spyOn(console, 'log');
    //   spyOn(dialog, 'open').and.returnValue(dialogRef);

    //   component.onCourseDeleted(courseId);
    //   expect(console.log).toHaveBeenCalledWith(
    //     `You delete ${courseName} course with ID: ${courseId}`
    //   );
    // });
  });

  describe('filter pipe for courses', () => {
    it('should apply the filter and update the filteredCourses array', () => {
      const searchText = 'script';
      coursesService.getCourses();
      component.ngOnInit();
      component.applyFilter(searchText);
      expect(component.searchText).toEqual(searchText);
      expect(component.filteredCourses).toEqual(testCourses);
    });
  });
});
