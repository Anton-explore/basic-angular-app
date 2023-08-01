import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, RouterModule } from '@angular/router';

import { HeaderComponent } from './header.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthService } from 'src/app/shared/services/auth.service';
import { mockedUser } from 'src/app/utils/mock-items';
import { BehaviorSubject, of } from 'rxjs';
import { User } from 'src/app/utils/datatypes';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let authService: AuthService;
  let httpTestingController: HttpTestingController;
  let router: Router;

  beforeEach(async () => {
    const authServiceStub: Partial<AuthService> = {
      user$: new BehaviorSubject<User | null>(null),
      logout: () => {
        console.log('Login out');
      },
    };

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        RouterModule,
        AppRoutingModule,
        SharedModule,
      ],
      declarations: [HeaderComponent],
      providers: [{ provide: AuthService, useValue: authServiceStub }],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    httpTestingController = TestBed.inject(HttpTestingController);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  afterEach(() => {
    const req = httpTestingController.expectOne(
      'http://localhost:3004/auth/userinfo'
    );
    expect(req.request.method).toBe('POST');
    req.flush({});
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize properties correctly', () => {
    component.ngOnInit();
    fixture.detectChanges();

    expect(component.user$).toBeTruthy();
    component.user$.subscribe(user => {
      expect(user).toBeNull();
    });
    expect(component.buttonText).toEqual('Log out');
    // expect(component.user).toBeNull();
  });

  it('should get user object when authenticated', () => {
    // authService.isLoggedIn$.next(true);
    // const req = httpTestingController.expectOne({
    //   method: 'POST',
    //   url: 'http://localhost:3004/auth/userinfo',
    // });
    // req.flush(mockedUser);
    authService.user$ = of(mockedUser);

    component.user$.subscribe(user => {
      expect(user).toEqual(mockedUser);
    });
  });

  it('should logout when logOut() is called', () => {
    spyOn(authService, 'logout');
    spyOn(router, 'navigate');

    component.logOut();

    expect(authService.logout).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });
});
