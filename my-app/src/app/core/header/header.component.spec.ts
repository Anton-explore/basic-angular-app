import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthService } from 'src/app/shared/services/auth.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule, AppRoutingModule, SharedModule],
      declarations: [HeaderComponent],
      providers: [AuthService],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize properties correctly', () => {
    expect(component.buttonText).toEqual('Log out');
    expect(component.isAuth).toBeFalse();
    expect(component.user).toBeNull();
  });

  it('should call authService.logout(), update user info, and log a message when logOut() is called', () => {
    spyOn(authService, 'logout');
    spyOn(console, 'log');
    spyOn(component, 'updateUserInfo');

    component.logOut();

    expect(authService.logout).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith('Logging off..');
    expect(component.updateUserInfo).toHaveBeenCalled();
  });
});
