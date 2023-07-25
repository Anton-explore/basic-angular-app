import { Component, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import {
  faArrowRightFromBracket,
  faArrowRightToBracket,
  faCircleUser,
} from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { User } from 'src/app/utils/datatypes';

import { BUTTONS_TEXT } from 'src/app/utils/mock-items';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  buttonText: string = BUTTONS_TEXT.OUT;
  user: User | null = null;
  loginIcon = faArrowRightToBracket;
  logoutIcon = faArrowRightFromBracket;
  userIcon = faCircleUser;
  private userSubscr!: Subscription;

  constructor(
    private authService: AuthService,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit() {
    this.userSubscr = this.authService.user$.subscribe(user => {
      this.user = user;
    });
  }

  ngOnDestroy(): void {
    this.userSubscr.unsubscribe();
  }

  logOut(): void {
    this.authService.logout();
    this.user = null;
    this.router.navigate(['/login']);
  }
}
