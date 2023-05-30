import { Pipe, PipeTransform } from '@angular/core';
import { CourseType } from 'src/app/utils/datatypes';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(
    courses: CourseType[],
    order: 'asc' | 'desc' = 'asc',
    searchText?: string
  ): CourseType[] {
    return courses.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      if (order === 'asc') {
        return searchText ? (a.name < b.name ? -1 : 1) : dateA < dateB ? -1 : 1;
      } else if (order === 'desc') {
        return searchText ? (b.name < a.name ? -1 : 1) : dateB < dateA ? -1 : 1;
      }
      return 0;
    });
  }
}
