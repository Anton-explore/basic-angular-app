import { TestBed } from '@angular/core/testing';
import { SpyObj } from '@types/jasmine';

import { AuthService } from './auth.service';
import { User } from 'src/app/utils/datatypes';

describe('AuthService', () => {
  let authService: SpyObj<AuthService>;
  let email: string;
  let password: string;
  let expectedUser: User;
  let expectedToken: string;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService],
    });
    authService = TestBed.inject(AuthService) as SpyObj<AuthService>;

    email = 'test@example.com';
    password = '1234';
    expectedUser = {
      email,
      firstName: 'TestUser',
      lastName: 'TestSurname',
      id: '12345',
    };
    expectedToken = 'some_fake_token' + email;
  });

  afterEach(() => {
    localStorage.clear();
  });

  afterAll(() => {
    TestBed.resetTestingModule();
    localStorage.clear();
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });

  describe('login', () => {
    it('should store user and token in localStorage when password is correct', () => {
      authService.login(email, password);

      const storedUser = localStorage.getItem('user');
      const storedToken = localStorage.getItem('token');

      expect(storedUser).toEqual(JSON.stringify(expectedUser));
      expect(storedToken).toEqual(expectedToken);
    });

    it('should not store user and token in localStorage when password is incorrect', () => {
      password = 'incorrect_password';

      authService.login(email, password);

      const storedUser = localStorage.getItem('user');
      const storedToken = localStorage.getItem('token');

      expect(storedUser).toBeNull();
      expect(storedToken).toBeNull();
    });

    it('should emit the login event when login is successful', () => {
      // spyOn(authService.loginEvent, 'emit');

      authService.login('test@example.com', '1234');

      expect(authService.loginEvent.emit).toHaveBeenCalled();
    });
  });

  describe('logout', () => {
    beforeEach(() => {
      localStorage.setItem(
        'user',
        JSON.stringify({ email: 'test@example.com' })
      );
      localStorage.setItem('token', 'some_fake_token');
    });

    it('should remove user and token from localStorage', () => {
      authService.logout();

      const storedUser = localStorage.getItem('user');
      const storedToken = localStorage.getItem('token');

      expect(storedUser).toBeNull();
      expect(storedToken).toBeNull();
    });

    it('should emit event when logout', () => {
      // spyOn(authService.loginEvent, 'emit');
      authService.logout();
      expect(authService.loginEvent.emit).toHaveBeenCalled();
    });
  });

  describe('isAuthenticated', () => {
    it('should return true when token is present in localStorage', () => {
      localStorage.setItem('token', 'some_fake_token');

      const isAuthenticated = authService.isAuthenticated();

      expect(isAuthenticated).toBeTrue();
    });

    it('should return false when token is not present in localStorage', () => {
      localStorage.removeItem('token');

      const isAuthenticated = authService.isAuthenticated();

      expect(isAuthenticated).toBeFalse();
    });
  });

  describe('getUserInfo', () => {
    it('should return the user object from localStorage', () => {
      localStorage.setItem('user', JSON.stringify(expectedUser));

      const user = authService.getUserInfo();

      expect(user).toEqual(expectedUser);
    });

    it('should return null when user is not present in localStorage', () => {
      localStorage.removeItem('user');

      const user = authService.getUserInfo();

      expect(user).toBeNull();
    });
  });
});
