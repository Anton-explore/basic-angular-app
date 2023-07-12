import {
  RouteReuseStrategy,
  ActivatedRouteSnapshot,
  DetachedRouteHandle,
} from '@angular/router';
import { MainSectionComponent } from 'src/app/core/main-section/main-section.component';

export class CustomRouteReuseStrategy implements RouteReuseStrategy {
  private routeCache = new Map<string, DetachedRouteHandle>();

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return route.component === MainSectionComponent;
  }

  store(
    route: ActivatedRouteSnapshot,
    handle: DetachedRouteHandle | null
  ): void {
    if (handle && route.component === MainSectionComponent) {
      this.routeCache.set(route.routeConfig?.path || '', handle);
    }
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return this.routeCache.has(route.routeConfig?.path || '');
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    return this.routeCache.get(route.routeConfig?.path || '') || null;
  }

  shouldReuseRoute(
    future: ActivatedRouteSnapshot,
    curr: ActivatedRouteSnapshot
  ): boolean {
    return future.component === curr.component;
  }
}
