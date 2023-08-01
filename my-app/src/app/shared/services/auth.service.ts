import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { User, UserLoginType } from 'src/app/utils/datatypes';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly USER_KEY = 'user';
  private readonly TOKEN_KEY = 'token';
  private token: null | string = localStorage.getItem(this.TOKEN_KEY);
  public isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    !!this.token
  );
  private userSource: BehaviorSubject<User | null> =
    new BehaviorSubject<User | null>(null);
  public user$ = this.userSource.asObservable();

  isAuthenticated$ = new BehaviorSubject<boolean>(!!this.token);

  constructor(private http: HttpClient, private router: Router) {
    if (this.isAuthenticated()) {
      this.getUserInfo();
    }
  }

  login(login: string, password: string): void {
    const loggedData = {
      login,
      password,
    };

    this.http
      .post<UserLoginType>('http://localhost:3004/auth/login', loggedData)
      .pipe(
        tap(data => {
          if (data.token) {
            this.isLoggedIn$.next(!!data.token);
            localStorage.setItem(this.TOKEN_KEY, data.token);
            this.getUserInfo();
          }
        })
      )
      .subscribe(data => {
        if (data) {
          this.router.navigate(['/courses']);
        }
      });
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.token = null;
    this.isLoggedIn$.next(!!this.token);
    localStorage.removeItem(this.USER_KEY);
  }

  isAuthenticated(): boolean {
    this.token = localStorage.getItem(this.TOKEN_KEY);
    return !!this.token;
  }

  getUserInfo(): void {
    const userToken = localStorage.getItem(this.TOKEN_KEY);
    this.http
      .post<User | null>('http://localhost:3004/auth/userinfo', {
        token: userToken,
      })
      .subscribe(data => {
        if (data) {
          localStorage.setItem(this.USER_KEY, JSON.stringify(data));
        }
        this.userSource.next(data);
      });
  }
}
