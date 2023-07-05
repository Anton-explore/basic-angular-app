import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  NavigationEnd,
  RouterEvent,
} from '@angular/router';
import { BreadCrumb } from 'src/app/utils/datatypes';
import { filter, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css'],
})
// export class BreadcrumbsComponent { }
// export class BreadcrumbsComponent implements OnInit {
//   breadcrumbs: BreadCrumb[] = [];

//   constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

//   ngOnInit(): void {
//     this.router.events.subscribe(event => {
//       if (event instanceof NavigationEnd) {
//         this.generateBreadcrumbs(this.activatedRoute.root);
//       }
//     });
//   }

//   private generateBreadcrumbs(
//     route: ActivatedRoute,
//     url = '',
//     breadcrumbs: BreadCrumb[] = []
//   ): void {
//     const { snapshot } = route;

//     if (snapshot.url.length) {
//       const breadcrumb: BreadCrumb = {
//         label: this.getRouteLabel(snapshot),
//         url: `${url}/${snapshot.url.map(segment => segment.path).join('/')}`,
//       };

//       breadcrumbs.push(breadcrumb);
//     }

//     if (snapshot.firstChild) {
//       this.generateBreadcrumbs(snapshot.firstChild, url, breadcrumbs);
//     } else {
//       this.breadcrumbs = breadcrumbs;
//     }
//   }

//   private getRouteLabel(
//     snapshot: import('@angular/router').ActivatedRouteSnapshot
//   ): string {
//     const { data } = snapshot;

//     if (data && data['breadcrumb']) {
//       return data['breadcrumb'];
//     }

//     return '';
//   }
// }
export class BreadcrumbsComponent implements OnInit {
  public breadcrumbs: BreadCrumb[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
  }

  ngOnInit() {
    this.router.events
      .pipe(
        filter((event: Event) => event instanceof NavigationEnd),
        distinctUntilChanged()
      )
      .subscribe(() => {
        this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
      });
  }

  buildBreadCrumb(
    route: ActivatedRoute,
    url = '',
    breadcrumbs: BreadCrumb[] = []
  ): BreadCrumb[] {
    let label =
      route.routeConfig && route.routeConfig.data
        ? route.routeConfig.data.breadcrumb
        : '';
    const isClickable =
      route.routeConfig &&
      route.routeConfig.data &&
      route.routeConfig.data.isClickable;
    let path =
      route.routeConfig && route.routeConfig.data ? route.routeConfig.path : '';

    const lastRoutePart = path?.split('/').pop();
    const isDynamicRoute = lastRoutePart?.startsWith(':');
    if (isDynamicRoute && !!route.snapshot) {
      const paramName = lastRoutePart.split(':')[1];
      path = path.replace(lastRoutePart, route.snapshot.params[paramName]);
      label = route.snapshot.params[paramName];
    }

    const nextUrl = path ? `${url}/${path}` : url;

    const breadcrumb: BreadCrumb = {
      label: label,
      url: nextUrl,
    };
    const newBreadcrumbs = breadcrumb.label
      ? [...breadcrumbs, breadcrumb]
      : [...breadcrumbs];
    if (route.firstChild) {
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }
    return newBreadcrumbs;
  }
}
