import { TestBed } from '@angular/core/testing';

import { CoursesService } from './courses.service';
import { CourseType } from 'src/app/utils/datatypes';
import { COURSES } from 'src/app/utils/mock-items';

describe('CoursesService', () => {
  let coursesService: CoursesService;
  let mockCourses: CourseType[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursesService],
    });
    coursesService = TestBed.inject(CoursesService);
    mockCourses = COURSES.slice();
  });

  it('should be created', () => {
    expect(coursesService).toBeTruthy();
  });

  describe('getCourses', () => {
    it('should return the list of courses', () => {
      const courses = coursesService.getCourses();
      expect(courses).toEqual(mockCourses);
    });
  });

  describe('getCourseById', () => {
    it('should return the course with the specified id', () => {
      const courseId = 455654757;
      const course = coursesService.getCourseById(courseId);
      expect(course).toEqual(mockCourses.find(c => c.id === courseId));
    });

    it('should return undefined when course with the specified id is not found', () => {
      const courseId = 999;
      const course = coursesService.getCourseById(courseId);
      expect(course).toBeUndefined();
    });
  });

  describe('createCourse', () => {
    it('should add the course to the list of courses', () => {
      const newCourse = {
        id: 777,
        name: 'Test course',
        description: `Test description`,
        date: '1/11/2020',
        length: 100,
        isTopRated: false,
      };
      coursesService.createCourse(newCourse);
      const courses = coursesService.getCourses();
      expect(courses).toContain(newCourse);
    });
  });

  describe('updateCourse', () => {
    it('should update the course with the specified id', () => {
      const updatedCourse = {
        id: 455654757,
        name: 'JavaScript',
        description: `Lorem printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
        date: '5/20/2023',
        length: 140,
        isTopRated: false,
      };
      coursesService.updateCourse(updatedCourse);
      const courses = coursesService.getCourses();
      const course = courses.find(course => course.id === updatedCourse.id);
      expect(course).toEqual(updatedCourse);
    });

    it('should not update the course if the specified id is not found', () => {
      const updatedCourse = {
        id: 999,
        name: 'Updated Course',
        description: 'Test description',
        date: '1/11/2020',
        length: 120,
        isTopRated: false,
      };
      coursesService.updateCourse(updatedCourse);
      const course = coursesService.getCourseById(updatedCourse.id);
      expect(course).toBeUndefined();
    });
  });

  describe('removeCourse', () => {
    it('should remove the course with the specified id from the list of courses', () => {
      const courseId = 455654757;
      coursesService.removeCourse(courseId);
      const courses = coursesService.getCourses();
      expect(courses.find(c => c.id === courseId)).toBeUndefined();
    });

    it('should not remove any course if the specified id is not found', () => {
      const courseId = 999;
      coursesService.removeCourse(courseId);
      const courses = coursesService.getCourses();
      expect(courses.length).toEqual(mockCourses.length);
    });
  });
});
