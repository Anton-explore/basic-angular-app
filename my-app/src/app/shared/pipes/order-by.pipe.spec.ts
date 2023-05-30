import { CourseType } from 'src/app/utils/datatypes';
import { OrderByPipe } from './order-by.pipe';
import {
  COURSES,
  sortedByDateAsc,
  sortedByDateDesc,
  sortedByNameAsc,
  sortedByNameDesc,
} from 'src/app/utils/mock-items';

describe('OrderByPipe', () => {
  let pipe: OrderByPipe;
  let courses: CourseType[];
  const sortDateAsc: CourseType[] = sortedByDateAsc;
  const sortDateDesc: CourseType[] = sortedByDateDesc;
  const sortNameAsc: CourseType[] = sortedByNameAsc;
  const sortNameDesc: CourseType[] = sortedByNameDesc;

  beforeEach(() => {
    pipe = new OrderByPipe();
    courses = COURSES;
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return the original courses array if no order or search text is provided', () => {
    const transformed = pipe.transform(courses);
    expect(transformed).toEqual(courses);
  });

  it('should order the courses array in ascending order by date if order is "asc" and no search text is provided', () => {
    const transformed = pipe.transform(courses, 'asc');
    expect(transformed).toEqual(sortDateAsc);
  });

  it('should order the courses array in descending order by date if order is "desc" and no search text is provided', () => {
    const transformed = pipe.transform(courses, 'desc');
    expect(transformed).toEqual(sortDateDesc);
  });

  it('should order the courses array by name if search text is provided', () => {
    const transformed = pipe.transform(courses, 'asc', 'script');
    expect(transformed).toEqual(sortNameAsc);
  });

  it('should order the courses array by name in descending order if search text is provided and order is "desc"', () => {
    const transformed = pipe.transform(courses, 'desc', 'script');
    expect(transformed).toEqual(sortNameDesc);
  });
});
