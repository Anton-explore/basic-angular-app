import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faArrowRightFromBracket,
  faArrowRightToBracket,
  faCircleUser,
} from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
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
  loginIcon = faArrowRightToBracket;
  logoutIcon = faArrowRightFromBracket;
  userIcon = faCircleUser;
  user$!: Observable<User | null>;

  constructor(
    private authService: AuthService,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit() {
    this.user$ = this.authService.user$;
  }

  logOut(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
