import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/courses']);
    }
  }

  login() {
    if (this.email.trim() && this.password.trim()) {
      this.authService.login(this.email.trim(), this.password.trim());
    }
  }
}
