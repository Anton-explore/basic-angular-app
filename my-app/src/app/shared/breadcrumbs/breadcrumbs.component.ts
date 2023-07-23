import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
// import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { BreadCrumb, CourseType } from '../../utils/datatypes';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css'],
})
export class BreadcrumbsComponent implements OnInit {
  public breadcrumbs!: BreadCrumb[];

  constructor(
    private router: Router,
    // private activatedRoute: ActivatedRoute,
    private coursesService: CoursesService
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(async () => {
        this.breadcrumbs = this.generateBreadcrumbs();
      });
  }

  private generateBreadcrumbs(): BreadCrumb[] {
    const path = window.location.pathname;
    const parts = path.split('/').filter(part => part !== '');
    let courseTitle: string | null = null;

    const breadcrumbs: BreadCrumb[] = [];

    const lastPath = path.split('/').pop();
    const courseId = Number(lastPath);

    if (courseId) {
      this.coursesService.getCourseById(+courseId);
      this.coursesService.course$.subscribe((courseData: CourseType | null) => {
        if (courseData) {
          courseTitle = courseData.name;
        }
      });
    }

    let url = '';
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      const label =
        +part && courseTitle ? courseTitle : this.capitalizeFirstLetter(part);
      url += `/${part}`;

      const breadcrumb: BreadCrumb = {
        label,
        url,
      };

      breadcrumbs.push(breadcrumb);
    }

    return breadcrumbs;
  }

  private capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
