import { CourseType } from 'src/app/utils/datatypes';
import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  let pipe: FilterPipe;
  let courses: CourseType[];

  beforeEach(() => {
    pipe = new FilterPipe();
    courses = [
      {
        name: 'Angular',
        id: 1,
        length: 40,
        date: '8/9/2020',
        description: 'Some simple description',
      },
      {
        name: 'React',
        id: 2,
        length: 40,
        date: '8/9/2020',
        description: 'Some simple description',
      },
      {
        name: 'Typescript',
        id: 3,
        length: 40,
        date: '8/9/2020',
        description: 'Some simple description',
      },
    ];
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return the original courses array if searchText is empty', () => {
    const searchText = '';
    const transformed = pipe.transform(courses, searchText);
    expect(transformed).toEqual(courses);
  });

  it('should filter the courses array based on the searchText', () => {
    const searchText = 'angular';
    const transformed = pipe.transform(courses, searchText);
    expect(transformed.length).toBe(1);
    expect(transformed[0].name).toBe('Angular');
  });

  it('should filter the courses array case-insensitively', () => {
    const searchText = 'REACT';
    const transformed = pipe.transform(courses, searchText);
    expect(transformed.length).toBe(1);
    expect(transformed[0].name).toBe('React');
  });

  it('should return an empty array if no courses match the searchText', () => {
    const searchText = 'JavaScript';
    const transformed = pipe.transform(courses, searchText);
    expect(transformed.length).toBe(0);
  });
});
