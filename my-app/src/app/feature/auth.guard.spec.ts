import { TestBed } from '@angular/core/testing';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { AuthGuard } from './auth.guard';
import { AuthService } from '../shared/services/auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

class MockAuthService {
  isAuthenticated(): boolean {
    return true;
  }
}

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authService: AuthService;
  let router: Router;
  let routerNavigateSpy: jasmine.Spy;

  beforeEach(() => {
    routerNavigateSpy = jasmine.createSpy('navigate');

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthGuard,
        { provide: AuthService, useClass: MockAuthService },
        { provide: Router, useValue: { navigate: routerNavigateSpy } },
      ],
    });
    guard = TestBed.inject(AuthGuard);
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  describe('canActivate feature', () => {
    it('should allow access if user is authenticated', () => {
      spyOn(authService, 'isAuthenticated').and.returnValue(true);

      const route: ActivatedRouteSnapshot = new ActivatedRouteSnapshot();
      const state: RouterStateSnapshot =
        jasmine.createSpyObj<RouterStateSnapshot>('RouterStateSnapshot', [
          'toString',
        ]);

      const result = guard.canActivate(route, state);

      expect(result).toBe(true);
      expect(router.navigate).not.toHaveBeenCalled();
    });

    it('should redirect to /login if user is not authenticated', () => {
      spyOn(authService, 'isAuthenticated').and.returnValue(false);

      const route: ActivatedRouteSnapshot = new ActivatedRouteSnapshot();
      const state: RouterStateSnapshot =
        jasmine.createSpyObj<RouterStateSnapshot>('RouterStateSnapshot', [
          'toString',
        ]);

      const result = guard.canActivate(route, state);

      expect(result).toEqual(router.parseUrl('/login'));
      expect(router.navigate).toHaveBeenCalledWith(['/login']);
    });
  });
});
