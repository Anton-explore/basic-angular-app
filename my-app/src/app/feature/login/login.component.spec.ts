import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/shared/services/auth.service';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule],
      providers: [AuthService],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize email and password properties', () => {
    expect(component.email).toBe('');
    expect(component.password).toBe('');
  });

  it('should call authService method and log a success message when login() is called with valid email and password', () => {
    spyOn(authService, 'login');
    spyOn(console, 'log');
    component.email = 'test@example.com';
    component.password = '1234';
    component.login();

    expect(authService.login).toHaveBeenCalledWith('test@example.com', '1234');
    expect(console.log).toHaveBeenCalledWith('Logged in successfully');
  });

  it('shouldn`t call authService method and log a success message when login() is called with empty email and password', () => {
    spyOn(authService, 'login');
    spyOn(console, 'log');
    component.login();

    expect(authService.login).not.toHaveBeenCalled();
    expect(console.log).not.toHaveBeenCalled();
  });
});
