import { Pipe, PipeTransform } from '@angular/core';
import { CourseType } from 'src/app/utils/datatypes';

@Pipe({
  name: 'filter',
  pure: true,
})
export class FilterPipe implements PipeTransform {
  transform(courses: CourseType[], searchText: string): CourseType[] {
    if (courses.length === 0 || !searchText) {
      return courses;
    }
    searchText = searchText.toLowerCase();
    return courses.filter(course =>
      course.name.toLowerCase().includes(searchText)
    );
  }
}
