import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { BreadCrumb } from '../../utils/datatypes';
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
    private activatedRoute: ActivatedRoute,
    private coursesService: CoursesService
  ) {
    // this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
  }

  ngOnInit() {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(async () => {
        this.generateBreadcrumbs(this.activatedRoute.root);
      });
  }

  private generateBreadcrumbs(
    route: ActivatedRoute,
    url = '',
    breadcrumbs: BreadCrumb[] = []
  ): void {
    const { snapshot, children } = route;

    let courseTitle: string | null = null;

    const courseId = Number(snapshot.paramMap.get('id'));
    if (courseId) {
      const course = this.coursesService.getCourseById(+courseId);
      if (course) {
        courseTitle = course.name;
      }
    }
    // route.paramMap.subscribe(params => {
    //   const courseId = Number(params.get('id'));
    //   console.log(courseId);
    //   if (courseId) {
    //     const course = this.coursesService.getCourseById(+courseId);
    //     if (course) {
    //       courseTitle = course.name;
    //     }
    //   }
    // });

    if (snapshot.data['breadcrumb']) {
      const breadcrumb = {
        label: courseTitle
          ? 'Courses / ' + courseTitle
          : snapshot.data['breadcrumb'],
        url: '/courses',
        // url: url + '/' + snapshot.url.map(segment => segment.path).join('/'),
      };
      breadcrumbs.push(breadcrumb);

      const existingBreadcrumb = breadcrumbs.find(
        item => item.label === breadcrumb.label && item.url === breadcrumb.url
      );

      if (!existingBreadcrumb) {
        breadcrumbs.push(breadcrumb);
      }
    }

    if (children.length) {
      this.generateBreadcrumbs(children[0], url, breadcrumbs);
    } else {
      this.breadcrumbs = breadcrumbs;
    }
  }

  // private buildBreadCrumb(
  //   route: ActivatedRoute,
  //   url = '',
  //   breadcrumbs: BreadCrumb[] = []
  // ): BreadCrumb[] {
  //   const label =
  //     route.routeConfig && route.routeConfig.data
  //       ? route.routeConfig.data['breadcrumb']
  //       : '';

  //   const path =
  //     route.routeConfig && route.routeConfig.data ? route.routeConfig.path : '';

  //   const nextUrl = path ? `${url}/${path}` : url;

  //   const breadcrumb: BreadCrumb = {
  //     label: label,
  //     url: nextUrl,
  //   };

  //   const newBreadcrumbs = breadcrumb.label
  //     ? [...breadcrumbs, breadcrumb]
  //     : [...breadcrumbs];
  //   if (route.firstChild) {
  //     return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
  //   }
  //   return newBreadcrumbs;
  // }
}
