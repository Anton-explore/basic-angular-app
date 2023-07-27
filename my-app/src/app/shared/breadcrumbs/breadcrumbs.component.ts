import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
// import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, switchMap } from 'rxjs';
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
      .pipe(
        filter(e => e instanceof NavigationEnd),
        switchMap(() => this.coursesService.course$)
      )
      .subscribe(course => {
        this.breadcrumbs = this.generateBreadcrumbs(course);
      });
  }

  private generateBreadcrumbs(courseInput: CourseType | null): BreadCrumb[] {
    const path = window.location.pathname;
    const parts = path.split('/').filter(part => part !== '');

    const breadcrumbs: BreadCrumb[] = [];

    let url = '';
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      const label =
        +part && courseInput
          ? courseInput.name
          : this.capitalizeFirstLetter(part);
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
