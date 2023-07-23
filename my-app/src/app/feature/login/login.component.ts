import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.email.trim() && this.password.trim()) {
      this.authService.login(this.email.trim(), this.password.trim());
      // .subscribe(() => {
      //   this.router.navigate(['/courses']);
      // });
      // this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      //   if (isLoggedIn) {
      //     this.router.navigate(['/courses']);
      //   }
      // });
    }
    // if (this.authService.isAuthenticated()) {

    // }
  }
}
