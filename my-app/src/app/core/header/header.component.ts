import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faArrowRightFromBracket,
  faArrowRightToBracket,
  faCircleUser,
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/shared/services/auth.service';
import { User } from 'src/app/utils/datatypes';

import { BUTTONS_TEXT } from 'src/app/utils/mock-items';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  buttonText: string = BUTTONS_TEXT.OUT;
  isAuth = false;
  user: User | null = null;
  loginIcon = faArrowRightToBracket;
  logoutIcon = faArrowRightFromBracket;
  userIcon = faCircleUser;

  constructor(
    private authService: AuthService,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.user = this.authService.getUserInfo();
        this.isAuth = this.authService.isAuthenticated();
      }
    });
    this.authService.loginEvent.subscribe(() => {
      this.updateUserInfo();
    });
  }

  updateUserInfo() {
    this.isAuth = this.authService.isAuthenticated();
    if (this.isAuth) {
      this.user = this.authService.getUserInfo();
    }
  }

  logOut(): void {
    this.authService.logout();
    this.isAuth = this.authService.isAuthenticated();
    if (!this.isAuth) {
      this.router.navigate(['login']);
      console.log('Logging off..');
    }
    this.updateUserInfo();
  }
}
