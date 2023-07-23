import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css'],
})
export class MainSectionComponent implements OnInit {
  isAuthorize = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // this.isAuthorize = this.authService.isAuthenticated();
    this.authService.isLoggedIn$.subscribe((isAuth: boolean) => {
      this.isAuthorize = isAuth;
    });
  }
}
