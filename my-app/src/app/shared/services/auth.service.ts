import { Injectable, EventEmitter } from '@angular/core';
import { User } from 'src/app/utils/datatypes';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly USER_KEY = 'user';
  private readonly TOKEN_KEY = 'token';
  public loginEvent: EventEmitter<void> = new EventEmitter<void>();
  private isLoggedInSource: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  public isLoggedIn$: Observable<boolean> =
    this.isLoggedInSource.asObservable();

  login(email: string, password?: string): void {
    const user: User = {
      email,
      firstName: 'TestUser',
      lastName: 'TestSurname',
      id: '12345',
    };
    const token = 'some_fake_token' + email;
    const pass = '1234';

    if (password === pass) {
      this.isLoggedInSource.next(true);
      localStorage.setItem(this.USER_KEY, JSON.stringify(user));
      localStorage.setItem(this.TOKEN_KEY, token);
      this.loginEvent.emit();
    }
  }

  logout(): void {
    localStorage.removeItem(this.USER_KEY);
    localStorage.removeItem(this.TOKEN_KEY);
    this.loginEvent.emit();
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  getUserInfo(): User | null {
    const user = localStorage.getItem(this.USER_KEY);

    if (user) {
      return JSON.parse(user);
    }

    return null;
  }
}
